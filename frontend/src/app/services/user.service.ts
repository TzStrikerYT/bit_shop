import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

// cliente http de angular para hacer peticiones de http
import { HttpClient } from '@angular/common/http';

//decodificar un token
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: User
  URI_USERS_BACKEND = "http://localhost:5000/api/users"

  constructor(public http: HttpClient, public router: Router) { 
    this.currentUser = new User
  }

  /*

  credentials must be this

  {
    email: "test@mail.com",
    password: "123456"
  }

   */
  login(credentials: any){
    return this.http.post(`${this.URI_USERS_BACKEND}/login`, credentials)
  }

  signUp(formUser: any){
    return this.http.post(`${this.URI_USERS_BACKEND}/signup`, formUser)
  }

  loggedIn(){
    return localStorage.getItem('token') ? true : false
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
    return
  }

  decodeToken(): any{
    const token = localStorage.getItem('token')
    const decoded = jwtDecode(token ? token : "Error en token")
    return decoded
  }

  getFullName(): string {
    const data = this.decodeToken()
    return `${data.firstName} ${data.lastName}`
  }

}
