import { Injectable } from '@angular/core';
import {ProductProperty} from '../products/productProperty';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private API: string = 'http://5c1783f2bac6090013c89dff.mockapi.io/';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  getProducts(): Observable<ProductProperty[]> {
    return this.http.get<ProductProperty[]>(`${this.API}products`);
  }

  getProductById(id): Observable<ProductProperty> {
    return this.http.get<ProductProperty>(`${this.API}products/${id}`);
  }

  addProduct(product): Observable<ProductProperty> {
    return this.http.post<ProductProperty>(`${this.API}products`, product);
  }

  deleteProduct(id): Observable<ProductProperty> {
    return this.http.delete<ProductProperty>(`${this.API}products/${id}`);
  }

  updateProduct(product): Observable<ProductProperty> {
    return this.http.put<ProductProperty>(`${this.API}products/${product.id}`, product);
  }

  getFiveProducts(): Observable<ProductProperty[]> {
    return this.http.get<ProductProperty[]>(`${this.API}product5`);
  }

  getSixProducts(): Observable<ProductProperty[]> {
    return this.http.get<ProductProperty[]>(`${this.API}product6`);
  }

  redirectListProduct() {
    this.router.navigate(['manager/products']);
  }
}
