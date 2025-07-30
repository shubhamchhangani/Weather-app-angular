import { Component } from '@angular/core';
import { AuthService } from '../Services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth-page.html',
  styleUrl: './auth-page.css'
})
export class AuthPage {
  isSignIn = true;
  name = '';
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  async onSubmit() {
    try {
      if (this.isSignIn) {
        await this.auth.signIn(this.email, this.password);
      } else {
        await this.auth.signUp(this.name, this.email, this.password);
      }
      this.router.navigate(['/']);
    } catch (e: any) {
      this.error = e.message;
    }
  }
}