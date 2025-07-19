import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../login/login.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const authService = inject(LoginService);
  const router = inject(Router);
  console.log('authService.isLoggedIn', authService.isLoggedIn);
  return authService.isLoggedIn ? true : router.navigateByUrl('/login');
};
