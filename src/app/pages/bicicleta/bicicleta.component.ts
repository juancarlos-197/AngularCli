import { Mascota } from '../../interfaces/mascota';

import { Bicicleta } from '../../interfaces/bicicleta';
import { BicicletaService } from './../../services/bicicleta/bicicleta.service';
import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-bicicleta',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './bicicleta.component.html',
  styleUrl: './bicicleta.component.css'
})
export class BicicletaComponent {
  //Api Rest endpoint
  public bicicleta: Bicicleta[] = [];
  public error: string | null = null;

  // Inyección de Serice usando la función inject
  readonly bicicletaSerice = inject(BicicletaService);


  displayedColumns: string[] = ['id', 'nombre', 'tipo', 'edad',];
  dataSource: Bicicleta[] = [];
  constructor() { }

  ngOnInit() {
    /**Api Rest endpoint para consumir */
    // Ahora puedes usar mascotaSerice aquí
    this.bicicletaSerice.getBicicletaList().subscribe({
      next: (response) => {
        this.bicicleta = response.data;
        this.dataSource = response.data;
        console.log('Base de datos API Rest', this.bicicleta);
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
