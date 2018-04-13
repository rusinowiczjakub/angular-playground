import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductFilterPipe } from '../product-filter.pipe';
import { SearchService } from '../search.service';
import { Observable } from 'rxjs/Observable';
import { animate, state, style, transition, trigger, query, stagger, keyframes } from "@angular/animations";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [
    trigger("smoothFilter", [
      transition('void => *', [
          style({ 
            opacity: 0,
          }),
          animate('600ms ease-in', style({
            opacity: 1,
          }))
        ]),
        transition('* => void', [
          style({
            opacity: 1,
          }),
          animate('600ms ease-out', style({
            opacity: 0,
          }))
        ]),
    ]),
    trigger("loadAnimation", [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('100ms', [
          animate('0.5s ease-in', style({
            opacity: 1
          })
        )
      ]), {
        optional: true
      })
      ])
    ])
  ]
})

export class ProductComponent implements OnInit {

  products: Array<any> = [];
  term: any = '';
  start: number;
  end: number;

  constructor(private service: SearchService) {
    service.getTerm().subscribe(newTerm => {
      this.term = newTerm;
    });

    this.products = service.getProducts()

  }

  log() {
    console.log('elo');
  }

   ngOnInit() {
    
   }




}
