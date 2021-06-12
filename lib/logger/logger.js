"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const winston_cloudwatch_1 = __importDefault(require("winston-cloudwatch"));
const logFormater = winston_1.format.printf(({ level, message, timestamp, ...metadata }) => {
    return `[${level}] : ${message} \nAdditional Info: ${JSON.stringify(metadata)}}`;
});
const awsAccessKey = 'AKIA3YOHEQ6SIFUVEG7Q';
const awsSecretKey = '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';
exports.logger = winston_1.createLogger({
    exitOnError: false,
});
exports.logger.add(new winston_cloudwatch_1.default({
    logGroupName: 'dlabs-cloud-logs',
    logStreamName: 'pay-bill',
    awsSecretKey: awsSecretKey,
    awsAccessKeyId: awsAccessKey,
    awsRegion: 'eu-west-1',
    jsonMessage: true,
}));
//# sourceMappingURL=logger.js.map