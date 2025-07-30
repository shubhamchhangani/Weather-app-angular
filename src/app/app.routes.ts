import { Routes } from '@angular/router';
import { AuthPage } from './Auth/auth';
import { UsersPage } from './Users/users';
import { App } from './app';
import { authGuard } from './Services/authGuard';

export const routes: Routes = [
  { path: 'auth', component: AuthPage },
  { path: 'users', component: UsersPage, canActivate: [authGuard] },
  { path: '', component: App, canActivate: [authGuard] }
];
