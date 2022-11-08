import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';
import { Product } from '../dati/product.dati';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit,OnDestroy {
  prodotto?:Product
  subscription?:Subscription


  prodottiSimili?: Product[]

  constructor(private route: ActivatedRoute,
              private serviziprodotti: ProductsService,
              private router: Router,
              private cartService: CartService,
              private authService:AuthService) { 
          this.subscription= route.params.subscribe(params =>{
            const{name}=params 
            this.prodotto=serviziprodotti.cercaProdotto(name)
          })
              
          this.prodottiSimili = serviziprodotti.cercaProdSimili(this.prodotto?.category as string)

        }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  addToCart(){
    if(this.authService.islogged===true){
      this.cartService.addToCart(this.prodotto!)
      window.alert("Product added to cart")
    }
    else{
      this.router.navigate(["/login"])
    }
  }

}
