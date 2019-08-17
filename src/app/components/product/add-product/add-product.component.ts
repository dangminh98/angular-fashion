import { Component, OnInit, Input } from '@angular/core';
import {ProductService} from '../services/product.service';
import {ProductProperty} from '../products/productProperty';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(
    private productServices: ProductService
    ) { }

  ngOnInit() {
  }

  product: ProductProperty = new ProductProperty();

  addProduct = () => {
    this.product.image = 'http://localhost/papipu/public/images/products/1562578312_27067863_583751945299723_7942603576390880467_n.jpg';

    this.productServices.addProduct(this.product).subscribe(data => {
      this.productServices.redirectListProduct();
    });
  }


}
