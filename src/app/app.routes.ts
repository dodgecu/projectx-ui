import { Routes } from '@angular/router';

import { authGuard } from './auth/auth.guard';
import { authenticatedGuard } from './auth/authenticated.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/user-profile',
  },
  {
    path: 'sign-in',
    loadComponent: () => import('./auth/sign-in/sign-in.component').then((c) => c.SignInComponent),
    canActivate: [authenticatedGuard],
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./auth/sign-up/sign-up.component').then((c) => c.SignUpComponent),
    canActivate: [authenticatedGuard],
  },
  {
    path: 'user-profile',
    loadComponent: () => import('./user-profile/user-profile.component').then((c) => c.UserProfileComponent),
    canActivate: [authGuard],
  },
];
