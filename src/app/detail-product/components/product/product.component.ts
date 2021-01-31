import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';

import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product$: Observable<any> | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.product$ = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.productService.getDetailProduct(params.id);
      })
    );
    console.log(this.product$);
  }
}
