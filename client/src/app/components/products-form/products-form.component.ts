import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service'; 
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BillingsService } from 'src/app/services/billings.service';


@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  product: any = {
    id: 0,
    name:'',
    price:''
  } 

  billings: any = [{
    serviceName:''
  }]

  update:boolean = false;


  constructor(private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private billingsService: BillingsService
    ) { 

  }

  urlId = this.activatedRoute.snapshot.params['id'];

  ngOnInit(){
    if (this.urlId){
      this.getProduct()
    }
  }

  getProduct(){
    this.productsService.getProduct(this.urlId).subscribe(
      (result: any) =>{
        this.product = result;
        this.update = true;
      }
    )
  }

  saveClientData(){
    delete this.product.id;
    delete this.product.created_at;

    this.productsService.saveProduct(this.product).subscribe(
      (result: any) => {
        this.product = result;
        this.router.navigate(['/products']);
      }
    )
  }

  updateClientData(){
    this.productsService.updateProduct(this.product.id,this.product).subscribe(
      (result: any) => {
        this.product = result; 
        this.updateBillingProductName()
        this.router.navigate(['/products']); 
      }
    )
  
  }

  updateBillingProductName(){
    this.billingsService.getProductBillings(this.product.id).subscribe(
      (result: any) => {
        this.billings = result;

         for( let i=0 ; i<this.billings.length; i++){
          this.billings[i].serviceName = this.product.name;

          this.billingsService.updateBilling(this.billings[i].id,this.billings[i]).subscribe(
            (result: any) => {
            }
          )
        }  

      }
    )

  }  

  

  validateProduct(){
    if(this.update){
      this.updateClientData()
    }else{
      this.saveClientData()
    }
  }

}
