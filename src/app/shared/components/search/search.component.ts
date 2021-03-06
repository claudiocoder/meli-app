import { Component, OnInit } from '@angular/core';
import { labels } from '../../content/labels';
import { LabelsContent } from '../../interfaces/labels.interface';

import { ListServiceService } from '../../services/list-service.service';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  productSearch;
  foundProduct: any;
  errorGetProduct: boolean;

  content: LabelsContent;

  constructor(
    private productService: ProductService,
    private listService: ListServiceService
  ) {
    this.content = labels;
    this.productSearch = '';
    this.errorGetProduct = false;
  }

  ngOnInit(): void {}

  fetchProducts(): void {
    this.productService.getProducts(this.productSearch).subscribe(
      (response: any) => {
        this.foundProduct = response;
        this.listService.updateList(this.foundProduct);
      },
      (error) => {
        this.errorGetProduct = true;
      }
    );
  }

  reset(): void {
    this.productSearch = '';
    this.listService.updateList(this.productSearch);
  }
}
