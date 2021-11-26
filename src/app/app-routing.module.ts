import { CheckoutComponent } from './homepages/products/cart/checkout/checkout.component';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './homepages/profile/profile.component';
import { CartComponent } from './homepages/products/cart/cart.component';
import { CategoryComponent } from './admin/category/category.component';
import { RegisterComponent } from './register/register.component';

import { AdminComponent } from './admin/admin.component';
import { HomepagesComponent } from './homepages/homepages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './homepages/products/product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './homepages/contact-us/contact-us.component';
import { DetailComponent } from './homepages/products/detail/detail.component';
import { AuthGuard } from './auth/auth.guard';
const appRoutes:Routes =[
    {path: '',redirectTo:'/homepages',pathMatch:'full'},
    {path: 'homepages',component:HomepagesComponent,},
    
    {path: 'login',component:LoginComponent},
    {path: 'register',component:RegisterComponent},
    {path: 'products',component:ProductListComponent,children:[
        //  {path:'detail/:id',component:DetailComponent},
        //  {path: ':id/detail', component: DetailComponent}
    ]},
    {path: 'products/:id/detail',component:DetailComponent,},
    {path: 'detail/:id/carts',component:CartComponent,canActivate:[AuthGuard]},
    {path: 'detail/:id/carts/checkout',component:CheckoutComponent,canActivate:[AuthGuard]},
    {path: 'contact-us',component:ContactUsComponent},

    {path: 'profile',component:ProfileComponent,canActivate:[AuthGuard]},
    {path: 'error',component:ErrorComponent},

    {path: 'admin',component:AdminComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},
    {path: 'category',component:CategoryComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}