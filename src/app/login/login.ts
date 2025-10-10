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
      if (this.loginObj.id === 'admin' && this.loginObj.password === 'admin') {
        this.authService.login('administrador');
      } else {
        alert("Datos de administrador incorrectos");
      }
    } else {
      if (this.loginObj.id === '01' && this.loginObj.password === '123') {
        this.authService.login('cliente');
      } else {
        alert("Datos de cliente incorrectos");
      }
    }
  }
}