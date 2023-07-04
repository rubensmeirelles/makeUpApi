import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './HomeComponent';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModuleModule { }
