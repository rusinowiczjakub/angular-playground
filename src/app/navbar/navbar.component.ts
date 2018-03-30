import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

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

          transition('in => out', animate('400ms ease-in-out')),
          transition('out => in', animate('400ms ease-in-out'))
      ]),
      trigger('showA', [
          state('in', style({
              opacity: 1,
              display: 'inline-block'
          })),
      ])
  ]
})

export class NavbarComponent implements OnInit {
  menuState: string = 'out';
  stateA: string = 'out';

  constructor() {
  }

  ngOnInit() {

  }

  navToggle() {
      this.menuState = this.menuState === 'out' ? 'in' : 'out';
      setTimeout(() => {
          this.stateA = this.stateA === 'out' ? 'in' : 'out';
      }, 250);
  }
}
