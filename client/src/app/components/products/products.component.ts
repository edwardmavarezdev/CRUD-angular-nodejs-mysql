
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service'; 
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {  }

  url = this.activatedRoute.snapshot.params
  urlObject = Object.getOwnPropertyNames(this.activatedRoute.snapshot.params)[0]


  ngOnInit(){
    if(this.urlObject == 'idP'){
      this.singleProduct()
    }else{
      this.get()
    }
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

  singleProduct(){
    this.productsService.getProduct(this.url['idP']).subscribe(
      (result: any) => {
        this.products[0] = result;
      }
    )
  }


}
