import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductModel } from "./admin-product.model";

@Injectable({
    providedIn:'root'
})

export class UserService{
    constructor(private fb : FormBuilder , private http : HttpClient){}

   
    readonly BaseUrl ="http://localhost:25775/api";
    formModel = this.fb.group({
        userName:['',Validators.required],
        email:['',Validators.email],
        fullName:['',Validators.required],
        passwords: this.fb.group({
            password:['',[Validators.required,Validators.minLength(8)]],
            confirmPassword:['',Validators.required]    
        },{validators: this.comparePasswords})
        
    });

    comparePasswords(fb:FormGroup){
        let confirmPswrdCtrl = fb.get('confirmPassword');
        //passwordMismatch
        //confirmPswrdCtrl.errors = {passwordMismatch:true}
        if(confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors){
            if(fb.get('password').value != confirmPswrdCtrl.value)
                confirmPswrdCtrl.setErrors({passwordMismatch:true});
            else
                confirmPswrdCtrl.setErrors(null);
        }
    }

    register(){
        var body = {
            userName : this.formModel.value.userName,
            fullName : this.formModel.value.fullName,
            email : this.formModel.value.email,
            password : this.formModel.value.passwords.password
        };
        return this.http.post(this.BaseUrl + "/Account/Register", body);
    }
    login(formData) {
        return this.http.post(this.BaseUrl + '/Account/Login', formData);
    }
    
    getUserProfile() {
        return this.http.get(this.BaseUrl + '/UserProfile');
    }

    roleMatch(allowedRoles): boolean {
        var isMatch = false;
        var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
        var userRole = payLoad.role;
        allowedRoles.forEach(element => {
          if (userRole == element) {
            isMatch = true;
            return false;
          }
        });
        return isMatch;
    }
   
}