import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../dati/product.dati';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {
  prodotti: Product[]=[]
  constructor(private cartservice: CartService,private router: Router) { }

  ngOnInit(): void {
    this.prodotti=this.cartservice.getItems()
    console.log(this.prodotti)
  }

  goToCheckout(){
    this.router.navigate(["/checkout"])
  }

}
