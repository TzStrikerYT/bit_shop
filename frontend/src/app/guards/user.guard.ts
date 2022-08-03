import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router){

  }

  canActivate(){
    
    if(this.userService.loggedIn()){
      return true
    }

    this.router.navigate(['/login'])
    return false

  }
  
}
//const xd = require() es5
//import xd from '' es6

//module.exports = {} es5
//export es6
