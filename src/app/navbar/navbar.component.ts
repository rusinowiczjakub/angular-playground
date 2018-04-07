import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {AppComponent} from "../app.component";

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
              width: '45px'
          })),

          transition('in => out', animate('300ms ease-in-out')),
          transition('out => in', animate('300ms ease-in-out'))
      ]),
      trigger('showA', [
          state('in', style({
              opacity: 1,
          })),

          state('out', style({
              opacity: 0
          })),

        //   transition('out => in', animate('10ms'))
      ]),
  ]
})

export class NavbarComponent implements OnInit {

ngOnInit() {
    
}

  @Output() navState: EventEmitter<string> = new EventEmitter<string>();
  menuState: string = 'out'
  stateA: string = 'out';
  
  navToggle() {
      this.stateA = this.stateA === 'out' ? 'in' : 'out';
      this.menuState = this.menuState === 'out' ? 'in' : 'out';
      this.navState.emit(this.menuState);
  }
}
