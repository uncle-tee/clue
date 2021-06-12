"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const State_1 = require("./State");
const stackTrace = __importStar(require("stack-trace"));
class ErrorService {
    constructor(exception) {
        this.exception = exception;
    }
    errorDeterminator() {
        var _a, _b;
        return State_1.Errors[((_b = (_a = this.exception) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.statusCode) || '500'];
    }
    getSolution(errorObject) {
        const errorStack = stackTrace.parse(this.exception);
        return (errorStack[0] && (errorStack[0].typeName || errorStack[0].methodName)) ? errorObject.solutionOptions.intentional : errorObject.solutionOptions.notIntentional;
    }
}
exports.ErrorService = ErrorService;
//# sourceMappingURL=error.service.js.map