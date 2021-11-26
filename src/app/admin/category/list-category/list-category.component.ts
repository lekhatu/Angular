import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryModel } from 'src/app/shared/category.model';
import { CategoryService } from 'src/app/shared/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  constructor(public service : CategoryService, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:CategoryModel){
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete this record ?'))
    {
    this.service.deleteCategoryDetail(id)
      .subscribe(
        res=>{
          this.service.refreshList();
          this.toastr.error("Delete Category Successfully",'OK')
        },
        err=>{console.log(err)}
      )
    }
  }
  
}
