import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { animate, state, style, transition, trigger, query, keyframes  } from "@angular/animations";
import { AppComponent } from "../app.component";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
      trigger('slideInOut', [
          state('in', style({
              width: '250px',
          })),

          state('out', style({
              width: '0px'
          })),

          transition('in => out', animate('300ms')),
          transition('out => in', animate('300ms'))
      ]),

      trigger('slideIcon', [
          state('in', style({
              left: '290px',
          }),),
          state('out', style({
              left: '40px'
          })),
      ]),

      trigger('showA', [
          state('in', style({
              opacity: 1,
          })),

          state('out', style({
              opacity: 0,
          })),
      ]),

      trigger('slideCategory', [
          state('opened', style({
              display: 'block',
          })),

          state('closed', style({
              display: 'none',
          })),

          state('visible', style({
              opacity: 1
          })),
          
          state('unvisible', style({
              opacity: 0
          })),

          transition('visible <=> unvisible', animate('300ms'))
      ])
  ]
})

export class NavbarComponent {

    @Output() navState: EventEmitter<string> = new EventEmitter<string>();
    menuState: string = 'out'
    stateA: string = 'out';
    iconState: string = 'out';
    scaleState: string = 'out';
    categoryState = {
        1: 'closed',
        2: 'closed',
        3: 'closed',
        4: 'closed',
    }
    listState: string = 'unvisible';
    mobile: boolean;
    
    navToggle() {
        this.stateA = this.stateA === 'out' ? 'in' : 'out';
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
        this.iconState = this.iconState === 'out' ? 'in' : 'out';
        this.scaleState = this.scaleState === 'out' ? 'in' : 'out';

        for (let i = 1; i <= Object.keys(this.categoryState).length; i++) {
            this.categoryState[i] = this.menuState === 'in' ? 'closed' : 'closed';
        }

        this.navState.emit(this.menuState);
    }

    categoryToggle(index) {
        this.categoryState[index] = this.categoryState[index] === 'closed' ? 'opened' : 'closed';
        this.listState = this.listState === 'unvisible' ? 'visible' : 'unvisible';
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
