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
export class Login { // Se queda como 'Login'
  userType: string = 'cliente';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.userType);
  }
}