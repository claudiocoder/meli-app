import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../shared/services/list-service.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private listService: ListServiceService) {
    this.listService.cart$.subscribe((products) => {
      console.log('desde lista', products);
    });
  }

  ngOnInit(): void {}
}
