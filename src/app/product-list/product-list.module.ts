import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [ProductListComponent, ProductComponent],
  imports: [CommonModule, ProductListRoutingModule, SharedModule],
})
export class ProductListModule {}
