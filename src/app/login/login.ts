import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  // Objeto para los datos del formulario
  loginObj = {
    id: '',
    password: ''
  };
  // Variable para el rol seleccionado, cliente por defecto
  userType: string = 'cliente';

  constructor(private authService: AuthService) {}

  onLogin() {
    if (this.userType === 'administrador') {
      // Validación para el Administrador
      if (this.loginObj.id === 'admin' && this.loginObj.password === 'admin') {
        this.authService.login('administrador'); // Inicia sesión como admin
      } else {
        alert("Datos de administrador incorrectos");
      }
    } else {
      // Validación para el Cliente
      if (this.loginObj.id === '01' && this.loginObj.password === '123') {
        this.authService.login('cliente'); // Inicia sesión como cliente
      } else {
        alert("Datos de cliente incorrectos");
      }
    }
  }
}