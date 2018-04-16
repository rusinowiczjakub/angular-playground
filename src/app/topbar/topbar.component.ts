import { Component, OnInit, Output, EventEmitter, Input, HostListener } from '@angular/core';
import { SearchService } from '../search.service';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  
})
export class TopbarComponent implements OnInit {

    mobile: boolean;
    searchFocus: boolean = false;
    term: string;
    products: any;
    @Input() state: string;

    constructor(private service: SearchService) {
        this.products = service.getProducts();
    }

    ngOnInit() {
        if (window.screen.width <= 768) { // 768px portrait
            this.mobile = true;
        }

        if (window.screen.width > 768) {
            this.mobile = false;
        }
    }

    changeOutline() {
        this.searchFocus = !this.searchFocus;
    }

    changeTerm(term) {
        this.service.setParams(term);
    }

    @HostListener("window:resize", ['$event'])
    onResize() {
        if (window.screen.width <= 768) { // 768px portrait
            this.mobile = true;
        }

        if (window.screen.width > 768) {
            this.mobile = false;
        }
    }

}
