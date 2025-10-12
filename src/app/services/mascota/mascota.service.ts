import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ApiResponse } from '../../interfaces/apiResponse';
import { Mascota } from '../../interfaces/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private apiUrl: string = 'http://localhost:3000/mascotas';
  constructor(private http: HttpClient) { }

  getNewMascota(): Observable<ApiResponse<Mascota[]>> {
    return this.http.get(this.apiUrl).pipe(
      map((data) => ({ data } as ApiResponse<Mascota[]>)),
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
