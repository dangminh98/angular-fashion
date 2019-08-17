import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/share/header/header.component';
import { FooterComponent } from './components/share/footer/footer.component';
import { ProductsComponent } from './components/product/products/products.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { EditProductsComponent } from './components/product/edit-products/edit-products.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { ManagerComponent } from './components/product/manager/manager.component';

const appRoutes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  {
    path : 'products',
    component : ProductsComponent,
    pathMatch: 'full'
  },
  {
    path : 'manager/products',
    component : ManagerComponent
  },
  {
    path : 'manager/products/add',
    component : AddProductComponent
  },
  {
    path : 'manager/products/edit/:id',
    component : EditProductsComponent
  },
  {
    path : 'contact',
    component : ContactComponent
  },
  {
    path : 'about-us',
    component : AboutUsComponent
  },
  {
    path : 'products/:id',
    component : ProductDetailComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    AddProductComponent,
    ProductDetailComponent,
    EditProductsComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
