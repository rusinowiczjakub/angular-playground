import { Component, ViewChild } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import { NavbarComponent } from './navbar/navbar.component';
import { NgOnChangesFeature } from '@angular/core/src/render3';
import { SearchService } from './search.service';

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

    canvasState: string = 'out';

    public changeCanvasState(state):void {
        this.canvasState = state;
    }
}
