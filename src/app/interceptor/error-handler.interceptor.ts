import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
 
  const started = Date.now();
  console.log(`Petición saliente: ${req.method} ${req.url}`);

  return next(req).pipe(
    catchError((error: HttpErrorResponse)=>{
     const elapsed = Date.now() - started;
      console.log(`Petición completada: ${req.method} ${req.url} en ${elapsed} ms`);

      let errorMessage ="";
      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.message}`;
      } else {
        errorMessage = `Error code: ${error.status}; message:${error.message}`;

      }
      return throwError(()=>errorMessage)
    }));
};
