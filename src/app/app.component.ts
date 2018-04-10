import { Component, ViewChild } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
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
            'margin-left': '45px'
        })),

        state('in', style({
            'margin-left': '250px'
        })),

        transition('out <=> in', animate('300ms')),
    ])
  ],
  providers: [ SearchService ]
})
export class AppComponent {

    term: string;
    canvasState: string = 'out';

    constructor() {
        setInterval(() => {
            console.log(this.term);
        }, 4000);
    }

    public changeCanvasState(state):void {
        this.canvasState = state;
    }
}
