import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class UsersPage implements OnInit {
  users: { name: string, email: string }[] = [];

  constructor(private auth: AuthService) {}

  async ngOnInit() {
    this.users = await this.auth.getAllUsers();
  }
}