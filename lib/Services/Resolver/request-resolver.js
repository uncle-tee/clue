"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RequestResolverService {
    constructor(req) {
        this.request = req;
    }
    getRequestData() {
        return {
            headers: this.request.headers,
            method: this.request.method,
            body: this.request.body,
            query: this.request.query,
        };
    }
}
exports.RequestResolverService = RequestResolverService;
//# sourceMappingURL=request-resolver.js.map