import { ErrorStackTrace } from '../../@types';
export interface StacktraceErrorFilterAdapter {
    errorTrace(stackTrace: ErrorStackTrace, request: any, response: any): any;
}
