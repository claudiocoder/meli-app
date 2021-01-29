import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListServiceService {
  private list: any = [];
  private cart = new BehaviorSubject<any[]>([]);

  cart$ = this.cart.asObservable();

  constructor() {}

  updateList(products: any): void {
    this.cart.next(products);
  }
}
