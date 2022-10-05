
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = [{
    id: 0,
    name:'',
    price:''
  }]

  constructor(private productsService: ProductsService, private router: Router) {  }


  ngOnInit(){
    this.get()
  }

  get(){
    delete this.products.id;
    this.productsService.getProducts().subscribe(
      (result: any) => {
        this.products = result;
      }
    )
  }

  deleteProduct(id:any){
    this.productsService.deleteProduct(id).subscribe(
      (result: any) => {
        this.get();
      }
    )
  }

  update(id:any){
    this.router.navigate([`/products/update/${id}`])
  }

  seeAfiliateClients(id:any){
    this.router.navigate([`/products/${id}/clients`])
  }

}
