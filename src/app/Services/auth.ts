import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, User, signOut } from '@angular/fire/auth';
import { Firestore, collection, addDoc, getDocs } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);

  async signUp(email: string, password: string) {
    const cred = await createUserWithEmailAndPassword(this.auth, email, password);
    return cred.user;
  }

  async signIn(email: string, password: string) {
    const cred = await signInWithEmailAndPassword(this.auth, email, password);
    this.router.navigate(['/weather']);
    return cred.user;
  }

  async signOut() {
    await signOut(this.auth);
  }

  
}