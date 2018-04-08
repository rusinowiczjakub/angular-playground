import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  searchFocus: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  changeOutline() {
    this.searchFocus = !this.searchFocus;
  }

}
