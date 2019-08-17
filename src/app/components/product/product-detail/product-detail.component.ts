import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductProperty} from '../products/productProperty';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: ProductProperty;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.route.params.subscribe(params => {
      const {id} = params;
      this.productService.getProductById(id).subscribe(data => {
        this.product = data;

        console.log(this.product);
      });

    });
  }

}
