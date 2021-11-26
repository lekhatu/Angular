import { CategoryService } from './../../../shared/category.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { CategoryModel } from 'src/app/shared/category.model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

   constructor(public service : CategoryService,
              private toastr  :ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(this.service.formData.categoryId==0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }


  insertRecord(form:NgForm){
    this.service.postCategoryDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted successfully','Done Add New Category');
      },
      err => {console.log(err);}
    )
  }

  updateRecord(form:NgForm){
    this.service.putCategoryDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Update successfully','Done Add New Category');
      },
      err => {console.log(err);}
    )
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new CategoryModel();
  }

}

