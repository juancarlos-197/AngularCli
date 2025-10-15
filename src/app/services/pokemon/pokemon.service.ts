import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonResults } from '../../interfaces/pokemon';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient
    
  ) { }

  getPokemonList():Observable<PokemonResults>{
    return this.http.get<PokemonResults>(`${environment.apiUrlBase}pokemon?limit=100000&offset=0`)
/**
 * Si nuestro servicio hace una request http al servidor, que en este caso es donde esta alojado 
 * la pokeapi, ese servidor o esa pokeapi responde bien sea con un listado de Pokemon o con algun error 
 * Esta bastante claro,y esta bastante limpio. 
 * 
 * 
 *  .pipe(catchError((error: HttpErrorResponse)=>{
      let errorMessage ="";
      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.message}`;
      } else {
        errorMessage = `Error code: ${error.status}; message:${error.message}`;

      }
      return throwError(()=>errorMessage)
    }));
 
 * 
 * 
 */

   


  }
}
