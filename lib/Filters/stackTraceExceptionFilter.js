"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const Resolver_1 = require("../Services/Resolver");
let StackTraceExceptionFilter = class StackTraceExceptionFilter extends core_1.BaseExceptionFilter {
    constructor(filterAdapter) {
        super();
        this.filterAdapter = filterAdapter;
    }
    async catch(exception, host) {
        if (host.getType() != 'http') {
            return;
        }
        const request = host.switchToHttp().getRequest();
        const response = host.switchToHttp().getResponse();
        let errorStackTrace = await new Resolver_1.ErrorStackTraceResolver(request, exception).resolveException();
        return this.filterAdapter.errorTrace(errorStackTrace, request, response);
    }
};
StackTraceExceptionFilter = __decorate([
    common_1.Catch(),
    __metadata("design:paramtypes", [Object])
], StackTraceExceptionFilter);
exports.StackTraceExceptionFilter = StackTraceExceptionFilter;
//# sourceMappingURL=stackTraceExceptionFilter.js.map