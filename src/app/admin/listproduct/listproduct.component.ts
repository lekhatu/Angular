import { ProductModel } from '../../shared/admin-product.model';
import { Component, OnInit } from '@angular/core';
import { AdminProductService } from 'src/app/shared/admin-product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

  constructor(public service : AdminProductService, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:ProductModel){
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete this record ?'))
    {
    this.service.deleteProductDetail(id)
      .subscribe(
        res=>{
          this.service.refreshList();
          this.toastr.error("Delete Product Successfully",'OK')
        },
        err=>{console.log(err)}
      )
    }
  }
  
}
