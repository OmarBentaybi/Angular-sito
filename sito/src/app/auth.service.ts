import { Injectable } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  islogged=false

  constructor(private router: Router) { }

  login(){
    this.islogged = true
    this.router.navigate(["/"])
    
  }

  logout(){
    this.islogged=false
  }
  isAutenticated(){
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.islogged)
      }, 1000)
    })

    return promise
  }
}
