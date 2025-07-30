import { Component, inject, signal, computed, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule],
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
