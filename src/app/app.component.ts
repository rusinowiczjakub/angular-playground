import { Component, ViewChild, EventEmitter, Output, OnInit, HostListener } from '@angular/core';
import { animate, state, style, transition, trigger } from "@angular/animations";
import { NavbarComponent } from './navbar/navbar.component';
import { NgOnChangesFeature } from '@angular/core/src/render3';
import { SearchService } from './search.service';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('off-canvas', [
        state('out', style({
            'margin-left': '0px'
        })),

        state('in', style({
            'margin-left': '250px'
        })),

        transition('out <=> in', animate('300ms')),
    ]),
  ],
  providers: [ SearchService ]
})
export class AppComponent implements OnInit {

    topbarState: string;
    term: string;
    canvasState: string = 'out';
    mobile: boolean;

    constructor() {
    }

    public changeCanvasState(state):void {
        this.canvasState = state;
        this.topbarState = state;
    }

    ngOnInit() {
        if (window.screen.width <= 768) { // 768px portrait
            this.mobile = true;
        }

        if (window.screen.width > 768) {
            this.mobile = false;
        }
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
