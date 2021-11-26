import { ProductModel } from './../../shared/admin-product.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AdminProductService } from 'src/app/shared/admin-product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public service : AdminProductService,
              private toastr  :ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(this.service.formData.productId==0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }


  insertRecord(form:NgForm){
    this.service.postProductDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted successfully','Done Add New Product');
      },
      err => {console.log(err);}
    )
  }

  updateRecord(form:NgForm){
    this.service.putProductDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Update successfully','Done Add New Product');
      },
      err => {console.log(err);}
    )
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new ProductModel();
  }

}
