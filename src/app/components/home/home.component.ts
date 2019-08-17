import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product/services/product.service';
import {ProductProperty} from '../product/products/productProperty';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService) { }

  productsFive: ProductProperty[];
  productsSix: ProductProperty[];

  ngOnInit() {
    this.productService.getFiveProducts().subscribe(data => { this.productsFive = data; } );
    this.productService.getSixProducts().subscribe(data => { this.productsSix = data; } );
  }


}
