import { ErrorStackTrace } from '../@types';
export declare const errorStackTraceMiddleWare: (errorCallBack?: (err: ErrorStackTrace, request: any, response: any, next: any) => any) => (err: any, req: any, res: any, next: any) => Promise<any>;
