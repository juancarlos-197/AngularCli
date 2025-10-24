import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ApiResponse } from '../../interfaces/apiResponse';
import { Heroes } from '../../interfaces/heroes';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {
 private http = inject(HttpClient);

  constructor() {}

  getHeroeList(){
    return this.http.get(`${environment.apiUrlHeroesBase}`)

   }
 
   private handleError(error: HttpErrorResponse) {
       let errorMensage = 'Ocurrio un error';
       if (error.error instanceof ErrorEvent) {
         //Error del lado del cliente
         errorMensage = `Error`
       } else {
         errorMensage = `Código de error`
       }
       return throwError(() => new Error(errorMensage))
     }
}
