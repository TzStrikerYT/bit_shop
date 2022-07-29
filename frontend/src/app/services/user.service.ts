import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

// cliente http de angular para hacer peticiones de http
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: User

  constructor() { 
    this.currentUser = new User
  }
}
