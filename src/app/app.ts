import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Header } from './components/header/header';
import { Login } from "./login/login";
import { Bartest } from './component/bartest/bartest';
import { Footer } from "./components/footer/footer";
import { ForgotPassword } from "./components/forgot-password/forgot-password";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Header, Bartest, Login, Footer, ForgotPassword],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('store-online');
}
