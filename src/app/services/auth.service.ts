import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storageService: StorageService) { }

  signup(user:User) {
    this.storageService.saveUser(user);
  }

  login(email: string, password: string) : boolean {
    let success: boolean = false;
    if (email && password) {
      let users: User[] = this.storageService.getUsers();
      if (users) {
        users.forEach((user)=> {
          if (email === user.email && password === user.password) {
            success = true;
            return;
          }
        });
      }
    }
    return success;
  }
}
