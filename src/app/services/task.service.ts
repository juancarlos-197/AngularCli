import { Injectable } from '@angular/core';
import { Mapa } from '../interfaces/mapa';
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
  private newPoint: any[] = [
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
  constructor() { }
  getAllNewPoint(): Mapa[] {
    return this.newPoint
  }
}
