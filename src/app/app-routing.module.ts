import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import ('./home/home-module.module').then(m => m.HomeModuleModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products-list/products-list.module').then(m => m.ProductsListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
