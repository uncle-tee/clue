import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { StacktraceErrorFilterAdapter } from '../Services/Adapter';
import { ErrorStackTraceResolver } from '../Services/Resolver';

@Catch()
export class StackTraceExceptionFilter extends BaseExceptionFilter {


	constructor(private readonly filterAdapter: StacktraceErrorFilterAdapter) {
		super();
	}

	async catch(exception: any, host: ArgumentsHost) {
		if (host.getType() != 'http') {
			return;
		}
		const request = host.switchToHttp().getRequest();
		const response = host.switchToHttp().getResponse();

		let errorStackTrace = await new ErrorStackTraceResolver(request, exception).resolveException();
		return this.filterAdapter.errorTrace(errorStackTrace, request, response);
	}
}
