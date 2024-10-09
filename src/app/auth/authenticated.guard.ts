import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { AuthService } from './auth.service';

export const authenticatedGuard: CanActivateFn = () => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return !authService.authToken() ? true : router.createUrlTree(['./user-profile']);
};
