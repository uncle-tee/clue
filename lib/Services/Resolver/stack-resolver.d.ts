import { ErrorStack } from '../../@types';
export declare class StackResolverService {
    private exception;
    constructor(exception: any);
    getProperErrorStack(): Promise<ErrorStack[]>;
}
