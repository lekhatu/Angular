import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminProductService } from 'src/app/shared/admin-product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

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