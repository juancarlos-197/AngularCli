import { Component, inject } from '@angular/core';
/**Importar Router: importar el servicio Router desde @angular/router en el componente 
 * donde realizarás la navegación.
 */
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-new',
  standalone: true,
  imports: [],
  templateUrl: './hero-new.component.html',
  styleUrl: './hero-new.component.css'
})
export class HeroNewComponent {
  /**Inyectar Router: Inyecta una instancia del servicio Router en el constructor 
   * del componente, o usa la función inject() para obtenerla en la clase.
  */
  readonly router = inject(Router)


  irAHome() {
    /**Llamar a navigate(): Llama al método navigate() en la instancia inyectada, pasándole una matriz
     *  de comandos de URL y, opcionalmente, un objeto de configuración. 
    */
    this.router.navigate(['/home']);
  }
}
