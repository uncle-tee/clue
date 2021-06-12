"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const env = __importStar(require("dotenv"));
env.config();
class EnvironmentResolverService {
    getEnvironmentList(envList) {
        const inversedObject = {};
        const keys = [];
        for (const key in envList) {
            keys.push(key);
        }
        for (let i = keys.length - 1; i >= 0; i--) {
            const value = envList[keys[i]];
            inversedObject[keys[i]] = value;
        }
        return inversedObject;
    }
}
exports.EnvironmentResolverService = EnvironmentResolverService;
//# sourceMappingURL=environment-resolver.js.map