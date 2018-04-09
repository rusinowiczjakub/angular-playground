import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  searchFocus: boolean = false;
  products: any;

  constructor(private service: SearchService) {
    this.products = service.getProducts();
   }

  ngOnInit() {
  }

  changeOutline() {
    this.searchFocus = !this.searchFocus;
  }

  changeTerm(term) {
    this.service.setParams(term);
  }

}
