import { AdminProductService } from './shared/admin-product.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive'; 
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomepageComponent } from './homepages/homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './homepages/products/products.component';
import { ProductListComponent } from './homepages/products/product-list/product-list.component';
import { DetailComponent } from './homepages/products/detail/detail.component';

import { ContactUsComponent } from './homepages/contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { HomepagesComponent } from './homepages/homepages.component';
import { CartComponent } from './homepages/products/cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './admin/product/product.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ListproductComponent } from './admin/listproduct/listproduct.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './shared/user.service';
import { CategoryComponent } from './admin/category/category.component';
import { AddCategoryComponent } from './admin/category/add-category/add-category.component';
import { ListCategoryComponent } from './admin/category/list-category/list-category.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ProfileComponent } from './homepages/profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { CheckoutComponent } from './homepages/products/cart/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    HomepageComponent,
    FooterComponent,
    ProductsComponent,
    ProductListComponent,
    DetailComponent,
    CartComponent,
    ContactUsComponent,
    LoginComponent,
    HomepagesComponent,
    AdminComponent,
    ProductComponent,
    ListproductComponent,
    RegisterComponent,
    CategoryComponent,
    AddCategoryComponent,
    ListCategoryComponent,
    ProfileComponent,
    ErrorComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CarouselModule,
    HttpClientModule ,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-top-right'
    })
  ],
  providers: [AdminProductService,UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
