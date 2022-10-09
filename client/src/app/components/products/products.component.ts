
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service'; 
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BillingsService } from 'src/app/services/billings.service';

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

  billings: any = []


  constructor(
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private billingsService: BillingsService
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

    this.billingsService.getProductBillings(id).subscribe(
      (result: any) => {
        this.billings = result;
        console.log(this.billings)
      
        
        for(let i=0; i<this.billings.length; i++)
        this.billingsService.deleteBilling(this.billings[i].id).subscribe(
          (result: any) =>{
            console.log(result)
          }
        )

      }
    )

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
