import { ProductModel } from './../../../shared/admin-product.model';
import { Component, Input, OnInit } from '@angular/core';
import { AdminProductService } from 'src/app/shared/admin-product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  constructor(public service : AdminProductService,private route: ActivatedRoute,){}
    
  id: any;
  pd : any;
  ngOnInit(): void{
    this.route.paramMap.subscribe(params=>{
      this.id= params.get('id');
    });
    this.getDetailId(this.id);
    this.service.refreshList();
  }
  
  getDetailId(id:any){
    this.service.getProductDetail(id).subscribe((res)=>{
      this.pd = res;
    });
  }
}