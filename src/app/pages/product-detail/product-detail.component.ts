import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product.model";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {Location} from "@angular/common";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId: string | null = null;
  product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          this.productId = params.get('id');
          if (this.productId) {
            return this.productsService.getProduct(this.productId);
          }
          return null;
        })
      )
      .subscribe(data => {
        this.product = data;
      });
  }


  goToBack() {
    this.location.back();
  }



}
