import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private route: Router, private loginService: LoginService) {}

  login() {
    if (this.loginService.Login(this.username, this.password)) {
      // alert('Login successful');
      this.route.navigateByUrl('/rooms');
    }
  }
}
