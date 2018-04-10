import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductFilterPipe } from '../product-filter.pipe';
import { SearchService } from '../search.service';
import { Observable } from 'rxjs/Observable';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [
    trigger("smoothFilter", [
      transition('void => *', [
          style({ opacity: 0}),
          animate('400ms ease-in', style({opacity: 1}))
        ]),
        transition('* => void', [
          style({opacity: 1}),
          animate('400ms ease-in', style({opacity: 0}))
        ])
    ])
  ]
})

export class ProductComponent implements OnInit {

  products: any;
  term: any;
  start: number;
  end: number;

  constructor(private service: SearchService) {
    this.products = service.getProducts();
    this.service.getTerm().subscribe(newTerm => {this.term = newTerm});
    this.start = 0;
    this.end = 5;

    this.slideRecommended();
  }

   ngOnInit() {
   }

   slideRecommended() {
    setInterval(()=> {
      this.start++;
      this.end++;
      
      if (this.end == this.products.length) {
        this.start = 0;
        this.end = 5;
      }
    }, 4000); 
   }



}
