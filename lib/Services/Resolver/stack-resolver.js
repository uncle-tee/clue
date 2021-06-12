"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const stackTrace = __importStar(require("stack-trace"));
const fs = __importStar(require("fs"));
class StackResolverService {
    constructor(exception) {
        this.exception = exception;
    }
    async getProperErrorStack() {
        const errorStack = await stackTrace.parse(this.exception);
        await errorStack.map(async (_stack, index) => {
            var _a;
            const data = fs.existsSync(errorStack[index].fileName) ? fs.readFileSync(errorStack[index].fileName, 'utf-8') : '';
            const lines = data.split(/\r?\n/);
            errorStack[index].codeRaw = lines.slice((errorStack[index].lineNumber - 16) >= 0 ? errorStack[index].lineNumber - 16 : 0, errorStack[index].lineNumber + 15);
            errorStack[index].errorLines = [];
            lines.map((_line, lineIndex) => {
                if (lineIndex <= (errorStack[index].lineNumber + 15) && lineIndex > (errorStack[index].lineNumber - 16))
                    errorStack[index].errorLines.push(lineIndex);
            });
            const relativeFileName = (_a = errorStack[index].getFileName()) === null || _a === void 0 ? void 0 : _a.indexOf(process.cwd());
            if (relativeFileName > -1) {
                errorStack[index].fileName = errorStack[index].getFileName().replace(process.cwd(), '').replace(/\\|\//, '');
            }
            else {
                errorStack[index].fileName = errorStack[index].getFileName();
            }
        });
        return errorStack;
    }
}
exports.StackResolverService = StackResolverService;
//# sourceMappingURL=stack-resolver.js.map