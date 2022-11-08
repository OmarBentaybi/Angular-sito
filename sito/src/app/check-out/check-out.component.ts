import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../dati/product.dati';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  checkOutForm: FormGroup
  items:Product[]=[]


  constructor(private cartservice: CartService,
              private router: Router) {
    this.checkOutForm=new FormGroup({
      "firstname": new FormControl("",Validators.required),
      "lastname": new FormControl("",Validators.required),
      "username": new FormControl("",Validators.required),
      "email":new FormControl("", Validators.email),
      "address": new FormControl("",Validators.required),
      "country": new FormControl("",Validators.required),
      "cc-name": new FormControl("",Validators.required),
      "cc-number": new FormControl("",[Validators.required, Validators.min(1111111111111111), Validators.max(9999999999999999)]),
      "cc-expiration": new FormControl("",Validators.required),
      "cc-cvv": new FormControl("",[Validators.required, Validators.min(111), Validators.max(999)]),
    })
  }

  ngOnInit(): void {
    this.items=this.cartservice.getItems()
  }

  checkOut(){
    this.cartservice.clearCart()
    window.alert("Your order have been received")
    this.router.navigate(["/"])
  }

}
