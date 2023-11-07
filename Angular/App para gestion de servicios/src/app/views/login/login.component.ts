import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { ApiService } from "../../services/api/api.service";
import { login } from "../../types/login.ts";
import { Router } from "@angular/router";
import { response } from "../../types/response.ts";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });
  constructor(private api:ApiService, private router:Router) { }

  errorStatus:boolean = false;
  errorMessage:string = "";

  ngOnInit(): void {
    this.checkLocalStorage();
    //Siguiente video:https://www.youtube.com/watch?v=peL3EtedFjo
  }
  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['/dashboard']);
    }
  }

  onLogin(arg0:login) {
    this.api.onLogin(arg0).subscribe((data)=>{
      const response:response = data;
      if(response.status){
        localStorage.setItem('token',data.message.token);
        this.router.navigate(['/dashboard']);
      }
      else{
        this.errorStatus = true;
        this.errorMessage = data.message.error_msg;
      }
    })
  }
}
