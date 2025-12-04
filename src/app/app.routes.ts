import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './login/login';
import { Admin } from './components/admin/admin';
import { Profile } from './components/profile/profile';

// --- CORRECCIÓN FINAL: Nombres cortos ---
// Apuntamos a 'cart.ts' y 'favorites.ts'
import { Cart } from './components/cart/cart'; 
import { Favorites } from './components/favorites/favorites'; 

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'home', component: Home },
    { path: 'admin', component: Admin },
    { path: 'profile', component: Profile },
    
    // Usamos las clases que importamos arriba
    { path: 'cart', component: Cart },
    { path: 'favorites', component: Favorites },
    
    { path: '**', redirectTo: 'login' }
];