import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, User, signOut } from '@angular/fire/auth';
import { Firestore, collection, addDoc, getDocs } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);
  private firestore = inject(Firestore);

  async signUp(name: string, email: string, password: string) {
    const cred = await createUserWithEmailAndPassword(this.auth, email, password);
    await updateProfile(cred.user, { displayName: name });
    await addDoc(collection(this.firestore, 'users'), { uid: cred.user.uid, name, email });
    return cred.user;
  }

  async signIn(email: string, password: string) {
    const cred = await signInWithEmailAndPassword(this.auth, email, password);
    return cred.user;
  }

  async signOut() {
    await signOut(this.auth);
  }

  async getAllUsers(): Promise<{ name: string, email: string }[]> {
    const snapshot = await getDocs(collection(this.firestore, 'users'));
    return snapshot.docs.map(doc => doc.data() as { name: string, email: string });
  }
}