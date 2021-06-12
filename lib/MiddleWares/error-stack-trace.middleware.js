"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resolver_1 = require("../Services/Resolver");
exports.errorStackTraceMiddleWare = (errorCallBack) => {
    return (err, req, res, next) => {
        if (err) {
            return new Resolver_1.ErrorStackTraceResolver(req, err).resolveException()
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
//# sourceMappingURL=error-stack-trace.middleware.js.map