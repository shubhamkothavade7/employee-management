import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
  } from '@nestjs/common';
  
  @Catch(HttpException)
  export class CustomExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const status = exception.getStatus();
      const exceptionResponse = exception.getResponse();
  
      response.status(status).json({
        status_code: status,
        message: (exceptionResponse as any).message || 'An error occurred',
        error: exceptionResponse,
      });
    }
  }
  