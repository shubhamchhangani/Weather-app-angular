import { Component, inject, signal, computed, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LeftContainer } from "./left-container/left-container";
import { RightContainer } from "./right-container/right-container";
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FontAwesomeModule, NgIf,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private auth = inject(Auth);


  loggedIn = signal<boolean>(false);

  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      this.loggedIn.set(!!user);
    });
  }

  isLoggedIn() {
    return this.loggedIn();
  }

  
}
