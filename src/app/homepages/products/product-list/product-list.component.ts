import { ProductModel } from './../../../shared/admin-product.model';
import { Component, Input, OnInit } from '@angular/core';
import { AdminProductService } from 'src/app/shared/admin-product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() index : number;
  list: ProductModel[];
  
  constructor(public service : AdminProductService) { }

  ngOnInit(): void {
    this.service.refreshList();
  } 
}
