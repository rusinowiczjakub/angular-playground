import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductFilterPipe } from '../product-filter.pipe';
import { SearchService } from '../search.service';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})

export class ProductComponent implements OnInit {

  products: any;
  term: any;

  constructor(private service: SearchService) {
    this.products = service.getProducts();
    this.service.getTerm().subscribe(newTerm => {this.term = newTerm});
    console.log(this.term);
   }

   ngOnInit() {
   }



}
