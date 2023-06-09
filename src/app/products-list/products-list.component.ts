import { Component, OnInit } from '@angular/core';
import { MakeupService } from '../services/makeup.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: any[] | undefined;
  carregando: boolean = false;

  constructor(private api: MakeupService) {
  }
  ngOnInit(): void {
    this.GetProducts();
  }

  GetProducts() {
    this.carregando = true;
    this.api.getProducts().subscribe((response => {
      this.products = response as any[];
      this.carregando = false;
      console.log(this.products)
    }));

  }
}
