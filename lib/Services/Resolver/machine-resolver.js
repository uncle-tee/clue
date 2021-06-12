"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const os = __importStar(require("os"));
class MachineResolverService {
    getProperMachineStack() {
        const stack = {
            network: os.networkInterfaces(),
            cpu: {
                model: os.cpus()[0].model,
                architecture: os.arch(),
                thread: os.cpus().length
            },
            os: os.platform(),
            nodeEnvironment: process.release
        };
        stack.nodeEnvironment.version = process.version;
        return stack;
    }
}
exports.MachineResolverService = MachineResolverService;
//# sourceMappingURL=machine-resolver.js.map