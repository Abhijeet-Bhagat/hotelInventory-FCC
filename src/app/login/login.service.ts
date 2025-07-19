import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  constructor() {
    console.log('LoginService constructor');
  }

  Login(username: string, password: string) {
    if (username === 'admin@gmail' && password === 'admin') {
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
    if (username === 'user@gmail' && password === 'user') {
      this.isLoggedIn = true;
      this.isAdmin = false;
    }
    return this.isLoggedIn;
  }
}
