import winston, { createLogger, format, level, LogEntry } from 'winston';
import WinstonCloudwatch from 'winston-cloudwatch';


const logFormater = format.printf(({ level, message, timestamp, ...metadata }) => {
	return `[${level}] : ${message} \nAdditional Info: ${JSON.stringify(metadata)}}`;
});

const awsAccessKey = 'AKIA3YOHEQ6SIFUVEG7Q';
const awsSecretKey = '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';

export const logger = createLogger({
	exitOnError: false,
});

logger.add(new WinstonCloudwatch({
	logGroupName: 'dlabs-cloud-logs',
	logStreamName: 'pay-bill',
	awsSecretKey: awsSecretKey,
	awsAccessKeyId: awsAccessKey,
	awsRegion: 'eu-west-1',
	jsonMessage: true,
}));




