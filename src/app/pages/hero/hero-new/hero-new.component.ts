import { Component, inject, OnInit } from '@angular/core';
/**Importar Router: importar el servicio Router desde @angular/router en el componente 
 * donde realizarás la navegación.
 */
import { Router } from '@angular/router';
import { HeroListComponent } from '../../../components/hero-list/hero-list.component';
import { ColumnKeys, Heroes } from '../../../interfaces/heroes';
import { HeroeService } from '../../../services/heroe/heroe.service';

@Component({
  selector: 'app-hero-new',
  standalone: true,
  imports: [HeroListComponent],
  templateUrl: './hero-new.component.html',
  styleUrl: './hero-new.component.css'
})
export class HeroNewComponent implements OnInit{
  /**Inyectar Router: Inyecta una instancia del servicio Router en el constructor 
   * del componente, o usa la función inject() para obtenerla en la clase.
  */
  readonly router = inject(Router)


public heroeService = inject(HeroeService);

  

  data :any
  displayedColumns: ColumnKeys<Heroes> =['id', 'title', 'body', 'action'];
  sortables: ColumnKeys<Heroes> =['id', 'title',  'body'];
  

  ngOnInit(): void {
   this.getNewHeroes() 
  }
  
 getNewHeroes(){
      return this.heroeService.getHeroeList().subscribe({
        next:(data)=>{console.log(data)
        this.data=data
        console.log('rrrrrrr',data);
        
        }
      })
    }

  irAHome() {
    /**Llamar a navigate(): Llama al método navigate() en la instancia inyectada, pasándole una matriz
     *  de comandos de URL y, opcionalmente, un objeto de configuración. 
    */
    this.router.navigate(['/home']);
  }



}
