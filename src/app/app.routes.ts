import { Routes } from '@angular/router';
import { AuthPage } from './Auth/auth';
import { WeatherComponent } from './Weather/weather';
import { App } from './app';
import { authGuard } from './Services/authGuard';

export const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthPage },
  { path: 'weather', component: WeatherComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '/auth' }
];
