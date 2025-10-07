import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './login/login';
import { Admin } from './components/admin/admin';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'admin',
        component: Admin
    },
    {
        path: '**', // Cualquier otra ruta, redirige al login
        redirectTo: 'login'
    }
];