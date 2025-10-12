import { Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';

export const routes: Routes = [
    { path: 'producto',
        loadComponent: ()=>
            import('./pages/producto/producto.component').then(p=> p.ProductoComponent)
      }
];
