import { Mapa } from './../interfaces/mapa';
import { ApiResponse } from './../interfaces/apiResponse';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
/**Importa interfaces  */

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  /**Dependencias se va a inyectar desde en Root, muy importante entenderlo. 
   * Niveles de inyección de dependencias en Angular como lo es Root como lo es Any o 
   * como lo es componentes específico o también tenemos otra plataforma.  
    // Inyecciób de servicios desde en inicio de la aplicación completa.
    // Este archiv de pruebas que angular lleva siempre ese conjunta de pruebas. 
    // Dispunible en toda la aplicación.
    // Crear una nueva entidad de punto (marcador)**/

  /**Un arreglo de nuevo punto (Mapa). Variable privada  */
  private newPoin: any[] = [
    {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              32.7,
              45.78]
          },
          "properties": {
            "name": "Plaza de Armas",
            "category": "landmark",
            "marker-color": "#7e7e7e",
            "marker-size": "medium",
            "marker-symbol": "circle-stroked",
            "population": 123456
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              56,
              45
            ]
          },
          "properties": {
            "name": "Parque Bicentenario",
            "category": "park"
          }
        }
      ]
    }
  ]
  private newPoints: string = 'http://localhost:3000/data';//Un endpoint para consumir 

  /**Crea una dependencia llamada HttpClient  */
  constructor(private http: HttpClient) { }
  getAllNewPoint(): Mapa[] {
    return this.newPoin
  }

  getNewPoint(): Observable<ApiResponse<Mapa[]>> {
    /**Un verbo de la API, son GET para CONSULTAR, POST para enviar, PUT y PATCH para actuakizar
     * y DELECT para borrar, en este caso CONSULTAR
      */
    return this.http.get(this.newPoints).pipe(
      map((data) => ({ data } as ApiResponse<Mapa[]>)),
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
