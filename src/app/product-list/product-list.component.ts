import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../shared/services/list-service.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any;

  constructor(private listService: ListServiceService) {}

  ngOnInit(): void {
    this.listService.cart$.subscribe((products: any) => {
      this.products = products.items;
      console.log(this.products);
    });
  }
}
