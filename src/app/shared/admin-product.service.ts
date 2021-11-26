import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductModel } from "./admin-product.model";


@Injectable({
    providedIn: 'root'
})
export class AdminProductService{

   constructor( private http : HttpClient ){ }
   readonly baseURL ='http://localhost:25775/api/Products'
   formData: ProductModel = new ProductModel();

   list: ProductModel[];
   
    postProductDetail(){
        return this.http.post(this.baseURL, this.formData);
    }

    putProductDetail(){
        return this.http.put(`${this.baseURL}/${this.formData.productId}`, this.formData);
    }

    deleteProductDetail(id:number){
        return this.http.delete(`${this.baseURL}/${id}`);
    }

    refreshList(){ //get product 
        this.http.get(this.baseURL).toPromise().then(res=> this.list = res as ProductModel[]);
    }

    getProductDetail(id:any){
        return this.http.get("http://localhost:25775/api/Products/"+id);
       // return this.http.get(`${this.baseURL}/${id}`);
    }
}