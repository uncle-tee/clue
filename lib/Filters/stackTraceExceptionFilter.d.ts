import { ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { StacktraceErrorFilterAdapter } from '../Services/Adapter';
export declare class StackTraceExceptionFilter extends BaseExceptionFilter {
    private readonly filterAdapter;
    constructor(filterAdapter: StacktraceErrorFilterAdapter);
    catch(exception: any, host: ArgumentsHost): Promise<any>;
}
