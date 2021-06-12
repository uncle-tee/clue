import { ErrorStackTrace } from '../@types';
import { ErrorStackTraceResolver } from '../Services/Resolver';

export const errorStackTraceMiddleWare = (errorCallBack?: (err: ErrorStackTrace, request, response, next) => any) => {
	return (err, req, res, next) => {
		if (err) {
			return new ErrorStackTraceResolver(req, err).resolveException()
				.then(stackTrace => {
					if (!errorCallBack) {
						return next(err);
					}
					return errorCallBack(stackTrace, req, res, next);
				});
		}
		next();
	};
};

