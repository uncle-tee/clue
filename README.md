
<p align="center">  

# Clue

<a href="">  

### A  simple page to trace back exception errors on any environment  and also give the exact clue to the issue when they happen.
</p>  

### About
Getting stacktrace in a node application is a little bit laborious expecially on a consoles or logging systems like cloudwatch. Most times tools like Winson only show only the message that has been logged. Clue allows a stack trace of the error, it also recommends possiblle solutions for this errors and exceptions.

## Installation
### Install this package by running  the command below
##### Via npm:
```bash  
npm install trace-back```  
  
## Usage  
If you will like to get the stack trace of your application, simple use the `errorStackTraceMiddleWare` nodejs middleware that has been provided for you.  
####  Exampple  
  
```typescript  
const stackTraceLogger = errorStackTraceMiddleWare((err, request, response, next) => { logger.error('Error when registering', {  
  tag: ['CRITICAL', 'SALES`'],  
  stackTrace: err,  
 }); return response.json('error has failed');  
});  
app.use(stackTraceLogger);  
```  
The errorCalBack error parameter in the stacktrace will give you are nice error you can then stream to a logging platform like like AWS cloud watch for your use.

#### Stack Trace Sample after streamlined to cloudwatch.
![enter image description here](https://raw.githubusercontent.com/uncle-tee/clue/main/assests/aws-cloud-watch-log-sample.png)

```typescript  
async function bootstrap() {  
 const app = await NestFactory.create(ApplicationModule);  
 // Enables dark theme aswell app.useGlobalFilters(new StackTraceExceptionFilter({ errorTrace: (stackTrace: ErrorStackTrace, request, response)  => {  console.log(errorTrace)  
}}));  
 await app.listen(3000);}bootstrap();  
```  

#### Inspiration
Straceback is higly inspired from  [Laravel Ignition](https://github.com/facade/ignition) ,  [Nest Js Enligten](https://github.com/facade/ignition) as well as how developers always find it dificult to trace production bugs on production environment.

## TODO
- [x] Improve Test Tests
