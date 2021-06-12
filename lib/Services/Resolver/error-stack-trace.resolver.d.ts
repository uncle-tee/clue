import { ErrorStackTrace } from '../../@types';
export declare class ErrorStackTraceResolver {
    private exception;
    private request;
    constructor(req: any, exception: any);
    resolveException(): Promise<ErrorStackTrace>;
}
