import { HeroNewComponent } from './pages/hero/hero-new/hero-new.component';
import { Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';

export const routes: Routes = [

    {
        path: 'home',
        loadComponent: () =>
            import('./pages/home/home.component').then(h => h.HomeComponent)
    },
    {
        path: 'hero',
        children: [
            {
                path: 'new',
                loadComponent: () =>
                    import('./pages/hero/hero-new/hero-new.component').then(n => n.HeroNewComponent)
            },
            {
                path: 'update/:id',
                loadComponent: () =>
                    import('./pages/hero/hero-update/hero-update.component').then(u => u.HeroUpdateComponent)
            },

            {
                path: ':id',
                loadComponent: () =>
                    import('./pages/hero/hero-detail/hero-detail.component').then(d => d.HeroDetailComponent)
            }
        ]

    },
    {
        path: 'producto',
        loadComponent: () =>
            import('./pages/producto/producto.component').then(p => p.ProductoComponent)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
