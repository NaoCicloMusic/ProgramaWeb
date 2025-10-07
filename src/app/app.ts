import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Home } from './components/home/home';
import { Header } from './components/header/header';
import { Login } from "./login/login";
import { Bartest } from './component/bartest/bartest';
import { Footer } from "./components/footer/footer";
import { AdminComponent } from "./components/admin/admin";
import { AuthService } from './auth.service'; // 1. Importa el servicio

@Component({
  selector: 'app-root',
  imports: [
    CommonModule, // Añádelo a los imports
    RouterOutlet,
    Home,
    Header,
    Bartest,
    Login,
    Footer,
    AdminComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // 2. Inyecta el servicio para poder usarlo en el HTML
  constructor(public authService: AuthService) {}
}