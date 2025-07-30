import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LeftContainer } from "./left-container/left-container";
import { RightContainer } from "./right-container/right-container";
import { AuthPage } from './Auth/auth';
import { UsersPage } from './Users/users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LeftContainer, RightContainer, FontAwesomeModule, AuthPage, UsersPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('weatherApp');
}



