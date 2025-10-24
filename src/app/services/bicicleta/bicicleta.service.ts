import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { ApiResponse } from '../../interfaces/apiResponse';
import { Bicicleta } from '../../interfaces/bicicleta';

@Injectable({
  providedIn: 'root'
})
export class BicicletaService {

  constructor(private http:HttpClient) { }
 getBicicletaList(): Observable<ApiResponse<Bicicleta[]>> {
    return this.http.get(`${environment.apiUrlBicicletaListBase}`).pipe(
      map((data) => ({ data } as ApiResponse<Bicicleta[]>)),
      catchError(this.handleError)
    )
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