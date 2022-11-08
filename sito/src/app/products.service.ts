import { Injectable } from '@angular/core';
import { Product } from './dati/product.dati';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] =[
    {id:"001",name:"My Hero Academia - TSM Ochako Logo Hoodie",category:"clothing",slug:"ochako-logo-hoodye",description:"aaa",image:"/assets/solomid-hoodies-outerwear-my-hero-academia-tsm-ochako-logo-hoodie-31961066668076_2000x2000.jpg",price:99,score:3,quantity:3},
    {id:"002",name:"My Hero Academia - TSM Midorya Logo Hoodie",category:"clothing",slug:"mydoria-logo-hoodye",description:"bbb",image:"/assets/ded17836d352167c10143b09f7392f1363dd6d06_original.jpeg",price:199,score:5,quantity:37},
    {id:"001",name:"My Hero Academia - TSM Ochako Logo Hoodie",category:"clothing",slug:"ochako-logo-hoodye",description:"aaa",image:"/assets/solomid-hoodies-outerwear-my-hero-academia-tsm-ochako-logo-hoodie-31961066668076_2000x2000.jpg",price:99,score:3,quantity:3},
    {id:"002",name:"Naruto six path sage action figure",category:"clothing",slug:"naruto-six-path-figure",description:"bbb",image:"/assets/471199a2.jpg",price:59,score:5,quantity:1},
    {id:"002",name:"Kakashi action figure",category:"clothing",slug:"kakashi-action-figure",description:"bbb",image:"/assets/349088a2-emp.jpg",price:17,score:5,quantity:2},
    {id:"002",name:"Pokemon - Pikachu Hoodie",category:"clothing",slug:"pikachu-hoodye",description:"bbb",image:"/assets/447794a.jpg",price:52,score:5,quantity:3},
    {id:"002",name:"My Hero Academia - TSM Midorya Logo Hoodie",category:"clothing",slug:"mydoria-logo-hoodye",description:"bbb",image:"/assets/472124a.jpg",price:36,score:5,quantity:7},
    {id:"002",name:"My Hero Academia - TSM Midorya Logo Hoodie",category:"clothing",slug:"mydoria-logo-hoodye",description:"bbb",image:"/assets/ded17836d352167c10143b09f7392f1363dd6d06_original.jpeg",price:85,score:5,quantity:5},
  ]
  private _cart: Product[] = []

  constructor() { }

  cercaProdotto(name:string){
    return this.products.find(p => p.name === name)
  }

  cercaProdSimili(category: string){
    return this.products.filter(p => p.category === category)
  }

}
