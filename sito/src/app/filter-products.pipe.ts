import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './dati/product.dati';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(array: Product[], valore:string, chiave: string): Product[] {
    if (valore === "") return array
    return array.filter(p=> p.name.toLowerCase().indexOf(valore.toLocaleLowerCase()) != -1)
  }

}
