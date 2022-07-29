import { Component, OnInit } from '@angular/core';

// libreria de captura de formularios de angular
import { NgForm } from '@angular/forms';

// servicio de usuarios
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  signup(form: NgForm){
    console.log(form)
    console.log(this.userService.currentUser)
  }

  sayHi(){
    alert("Hi")
  }

}
