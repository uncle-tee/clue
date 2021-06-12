import { DeterminedError, ErrorStack, RequestData, MachineStack, ErrorStackTrace } from '../../@types';
import { ErrorService } from '../Errors';
import { StackResolverService } from './index';
import { RequestResolverService } from './index';
import { EnvironmentResolverService } from './index';
import { MachineResolverService } from './index';

export class ErrorStackTraceResolver {
	private exception: any;
	private request: any;

	constructor(req: any, exception: any) {
		this.exception = exception;
		this.request = req;
	}

	public async resolveException(): Promise<ErrorStackTrace> {
		const errorObject: DeterminedError = new ErrorService(this.exception).errorDeterminator();
		const errorSolution: string = new ErrorService(this.exception).getSolution(errorObject);
		const errorStack: ErrorStack[] = await new StackResolverService(this.exception).getProperErrorStack();
		const requestStack: RequestData = new RequestResolverService(this.request).getRequestData();
		const environmentStack: object = new EnvironmentResolverService().getEnvironmentList(process.env);
		const machineStack: MachineStack = new MachineResolverService().getProperMachineStack();

		return {
			response: this.exception.response,
			baseUrl: `${this.request.protocol}://${this.request.headers.host}/`,
			projectPath: process.env.PWD,
			errorStack,
			requestStack,
			environmentStack,
			machineStack,
			errorObject,
			errorSolution,
		};
	}
}
