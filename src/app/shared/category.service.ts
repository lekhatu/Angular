import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CategoryModel } from "./category.model";

@Injectable({
    providedIn: 'root'
})
export class CategoryService{

   constructor( private http : HttpClient ){ }
   readonly baseURL ='http://localhost:25775/api/Categories'
   formData: CategoryModel = new CategoryModel();

   list: CategoryModel[];
   
    postCategoryDetail(){
        return this.http.post(this.baseURL, this.formData);
    }

    putCategoryDetail(){
        return this.http.put(`${this.baseURL}/${this.formData.categoryId}`, this.formData);
    }

    deleteCategoryDetail(id:number){
        return this.http.delete(`${this.baseURL}/${id}`);
    }

    refreshList(){ //get category 
        this.http.get(this.baseURL).toPromise().then(res=> this.list = res as CategoryModel[]);
    }
}