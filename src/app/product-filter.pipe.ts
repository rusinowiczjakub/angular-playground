import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter' 
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: any, term: any): any {

    if (term === undefined) return products;

    return products.filter(function(product) {
      return product.name.toLowerCase().includes(term.toLowerCase())
    });
  }

}
