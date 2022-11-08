import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../dati/product.dati';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {


  products:Product[] = []
  ricerca:string=""

  constructor(private servizioprodotti: ProductsService) {
    this.products=servizioprodotti.products
  }

  ngOnInit(): void {
  }

}
