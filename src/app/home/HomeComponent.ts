import { Component, OnInit } from '@angular/core';
import { MakeupService } from '../services/makeup.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any[] | undefined;

  constructor(private api: MakeupService) {
  }
  ngOnInit(): void {
    this.GetProducts();
  }

  GetProducts() {
    this.api.getProducts().subscribe((response => {
      this.products = response as any[];


      const products = response as any[];

      console.log("RESPOSTA API: ", products[0]);

      // products.forEach(product => {
      //   console.log("Nome do produto:", product.name);
      //});
    }));

  }

}
