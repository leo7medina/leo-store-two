import { Component, OnInit } from '@angular/core';
import {ProductsComponent} from "../../components/products/products.component";
import {ProductsService} from "../../services/products.service";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  offset = 0;
  limit = 10;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.getAllProducts(10, 0)
      .subscribe(data => {
        this.products = data;
        this.offset += this.limit;
      });
  }

  onloadMore() {
    this.productsService.getAllProducts(this.limit, this.offset)
      .subscribe(data => {
        this.products = this.products.concat(data);
        this.offset += this.limit;
      });
  }

}
