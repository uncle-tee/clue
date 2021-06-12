import express from 'express';
import { errorStackTraceMiddleWare } from '../src/MiddleWares/error-stack-trace.middleware';
import { logger } from './logger/logger';

const app = express();
const PORT = 8000;
app.get('/', (req, res) => {
	throw Error();
	res.json('Running successfully');
});


const stackTraceLogger = errorStackTraceMiddleWare((err, request, response, next) => {
	logger.error('Error when registering', {
		tag: ['CRITICAL', 'SALES`'],
		stackTrace: err,
	});
	return response.json('error has failed');
});
app.use(stackTraceLogger);

app.listen(PORT, () => console.log(`Server is starting on port on port ${PORT}`));


