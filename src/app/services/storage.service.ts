import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getUsers(): User[]{
    let userStr = localStorage.getItem('bizi_users');
    if (userStr) {
      return JSON.parse(userStr);
    } else {
      return [];
    }

  }

  saveUser(user: User) {
    let users:User[] = this.getUsers();
    users.push(user);
    localStorage.setItem('bizi_users', JSON.stringify(users));
  }
}
