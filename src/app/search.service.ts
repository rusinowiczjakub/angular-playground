import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SearchService {

  term = new Subject<any>();

  setParams(val) {
    this.term.next(val);
}

  getTerm(): Observable<any> {
    return this.term.asObservable();
  }

  getProducts() {
    return [
      {
        id: 1,
        name: "Koszulka Tommy Hilfiger",
        stock: 10,
        price: 20
      },
      {
        id: 1,
        name: "Spodnie Levis",
        stock: 10,
        price: 20
      },
      {
        id: 1,
        name: "Koszulka Supreme",
        stock: 10,
        price: 20
      },
      {
        id: 1,
        name: "Buty Supreme",
        stock: 10,
        price: 20
      },
      {
        id: 1,
        name: "Płaszcz Jack&Jones",
        stock: 10,
        price: 20
      }
    ]
  }
}
