import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/'
    },
    {
        path: 'sign-in',
        loadComponent: () =>
            import('./auth/sign-in/sign-in.component')
                .then(c => c.SignInComponent)
    },
    {
        path: 'sign-up',
        loadComponent: () =>
            import('./auth/sign-up/sign-up.component')
                .then(c => c.SignUpComponent)
    },
];
