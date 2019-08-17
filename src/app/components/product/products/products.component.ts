import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import {ProductProperty} from './productProperty';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private productServices: ProductService
  ) { }

  products: ProductProperty[];

  ngOnInit() {
    this.productServices.getProducts().subscribe(data => { this.products = data; });
  }

  onDelete = id => {
    this.productServices.deleteProduct(id).subscribe(data => {
      this.products = this.products.filter(items => items !== data);
    });
  }
}
