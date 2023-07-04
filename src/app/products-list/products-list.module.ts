import { NgModule } from '@angular/core';
import { ProductsListComponent } from './products-list.component';
import { CommonModule } from '@angular/common';
import { ProductsListRoutingModule } from './products-list-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    ProductsListRoutingModule,
    MatProgressSpinnerModule,
    MatCardModule
  ]
})
export class ProductsListModule { }
