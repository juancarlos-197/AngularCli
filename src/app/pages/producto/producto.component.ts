import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../services/mascota/mascota.service';
import { Mascota } from '../../interfaces/mascota';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
    
  //Api Rest endpoint
  public mascota: Mascota[] = [];
    public error: string | null = null;

constructor(    private mascotaSerice: MascotaService
){

}
  ngOnInit() {


      /**Api Rest endpoint para consumir */
    this.mascotaSerice.getNewMascota().subscribe({
      next: (response) => {
        this.mascota = response.data;
                console.log('Base de datos API Rest', this.mascota);

       // this.loading = false;
      },
      error: (error) => {
        this.error = error.message
      }
    })
    //this.loading = true;
    this.error = null;



  }
}
