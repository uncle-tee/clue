"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Errors_1 = require("../Errors");
const index_1 = require("./index");
const index_2 = require("./index");
const index_3 = require("./index");
const index_4 = require("./index");
class ErrorStackTraceResolver {
    constructor(req, exception) {
        this.exception = exception;
        this.request = req;
    }
    async resolveException() {
        const errorObject = new Errors_1.ErrorService(this.exception).errorDeterminator();
        const errorSolution = new Errors_1.ErrorService(this.exception).getSolution(errorObject);
        const errorStack = await new index_1.StackResolverService(this.exception).getProperErrorStack();
        const requestStack = new index_2.RequestResolverService(this.request).getRequestData();
        const environmentStack = new index_3.EnvironmentResolverService().getEnvironmentList(process.env);
        const machineStack = new index_4.MachineResolverService().getProperMachineStack();
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
exports.ErrorStackTraceResolver = ErrorStackTraceResolver;
//# sourceMappingURL=error-stack-trace.resolver.js.map