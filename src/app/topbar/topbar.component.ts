import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SearchService } from '../search.service';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  
})
export class TopbarComponent implements OnInit {

    searchFocus: boolean = false;
    products: any;
    @Input() state: string;

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
