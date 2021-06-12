import { DeterminedError } from '../../@types';
export declare class ErrorService {
    private exception;
    constructor(exception: {
        response: {
            statusCode: string | number;
        };
    });
    errorDeterminator(): DeterminedError;
    getSolution(errorObject: DeterminedError): string;
}
