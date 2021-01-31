import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./product-list/product-list.module').then(
        (m) => m.ProductListModule
      ),
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./detail-product/detail-product.module').then(
        (m) => m.DetailProductModule
      ),
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
