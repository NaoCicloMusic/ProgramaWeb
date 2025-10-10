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
  loginObj = {
    id: '',
    password: ''
  };
  userType: string = 'cliente';

  constructor(private authService: AuthService) {}

  onLogin() {
    if (this.userType === 'administrador') {
      // Validación para el Administrador
      if (this.loginObj.id === 'admin' && this.loginObj.password === 'admin') {
        // CORRECCIÓN: Le avisamos al servicio que el admin ha iniciado sesión
        this.authService.login('administrador');
      } else {
        alert("Datos de administrador incorrectos");
      }
    } else {
      // Validación para el Cliente
      if (this.loginObj.id === '01' && this.loginObj.password === '123') {
        // CORRECCIÓN: Le avisamos al servicio que el cliente ha iniciado sesión
        this.authService.login('cliente');
      } else {
        alert("Datos de cliente incorrectos");
      }
    }
  }
}