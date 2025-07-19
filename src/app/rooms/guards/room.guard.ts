import { CanActivateChildFn, Router } from '@angular/router';
import { inject, Inject } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';

export const roomGuard: CanActivateChildFn = (childRoute, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  return loginService.isAdmin ? true : router.navigateByUrl('/login');  
};
