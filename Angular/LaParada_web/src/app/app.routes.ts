import { Routes } from '@angular/router';
import {} from './modules/auth/auth.routes'

export const routes: Routes = [
 {
    path: '',
    loadChildren: () => import('./pages/pages.routes').then(m => m.PAGES_ROUTES),
 },{
   path: 'auth',
   loadChildren: () => import('./modules/auth/auth.routes').then(m => m.AUTH_ROUTES),
   },
];
