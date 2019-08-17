import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import {ProductProperty} from '../products/productProperty';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  products: ProductProperty[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(data => {this.products = data});
  }

  onDelete = id => {
    const validateDelete = confirm('U sure?');

    if (validateDelete === true) {
      this.productService.deleteProduct(id).subscribe(data => {
        this.products = this.products.filter(items => items.id !== data.id);
      });
    }

  }

}
