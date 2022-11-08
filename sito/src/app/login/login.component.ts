import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup
  constructor(private auth: AuthService) {
    this.loginform=new FormGroup({
      "email":new FormControl("",[Validators.required, Validators.email]),
      "password": new FormControl("",Validators.required)
    })
   }

  ngOnInit(): void {
  
  }
  logged(){
    this.auth.login()
  }

}
