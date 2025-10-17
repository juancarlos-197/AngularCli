import { Component, inject, OnInit } from '@angular/core';
import { MascotaService } from '../../services/mascota/mascota.service';
import { Mascota } from '../../interfaces/mascota';
import {MatTableModule} from '@angular/material/table';




@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  //Api Rest endpoint
  public mascota: Mascota[] = [];
  public error: string | null = null;
   
  // Inyección de mascotaSerice usando la función inject
  readonly mascotaSerice=inject(MascotaService); 


  displayedColumns: string[] = ['id','nombre', 'tipo', 'edad', ];
  dataSource : Mascota[] = [];
  constructor() {}
  
  ngOnInit() {
    /**Api Rest endpoint para consumir */
        // Ahora puedes usar mascotaSerice aquí
    this.mascotaSerice.getNewMascota().subscribe({
      next: (response) => {
        this.mascota = response.data;
        this.dataSource = response.data;
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
