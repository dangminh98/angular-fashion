import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../services/product.service';
import {ProductProperty} from '../products/productProperty';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  product: ProductProperty;

  ngOnInit() {
    this.getProductById();
  }

  getProductById() {
    this.route.params.subscribe(params => {
      const {id} = params;
      this.productService.getProductById(id).subscribe(data => {
        this.product = data;
      });
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.product).subscribe(data => {
      this.productService.redirectListProduct();
    });
  }

}
