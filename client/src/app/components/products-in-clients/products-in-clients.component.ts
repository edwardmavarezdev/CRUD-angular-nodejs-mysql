import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { ProductsService } from 'src/app/services/products.service';
import { BillingsService } from 'src/app/services/billings.service';

@Component({
  selector: 'app-products-in-clients',
  templateUrl: './products-in-clients.component.html',
  styleUrls: ['./products-in-clients.component.css']
})
export class ProductsInClientsComponent implements OnInit {

  billings: any = []/* = [{
    id: 0,
    clientName : '',
    locationProduct : '',
    afiliatedPrice : '',  
    fiscalAddress : '',
    serviceName : '',
    ProductId:'',
    ClientId:''
  }]
/*
  products: any = [{
    id:''
  }]*/  
 
  constructor(
    private activatedRoute:ActivatedRoute,
    private productsService: ProductsService,
    private billingsService: BillingsService,
    private router:Router
    ) { }

    productUrl = this.activatedRoute.snapshot.params  
    productUrlObject = Object.getOwnPropertyNames(this.activatedRoute.snapshot.params)[0]
    
    

  ngOnInit(): void {
    this.validateGet()
  }

  getBillingsProduct(id:any){
    this.billingsService.getProductBillings(id).subscribe(
        (result: any) => {
          this.billings = result;
        }
      )
    } 

    getBillingsClients(id:any){
       this.billingsService.getClientsBillings(id).subscribe(
           (result: any) => {
             this.billings = result;
           }
         )
       } 

    validateGet(){
      if(this.productUrlObject=='id'){
        const id = this.productUrl['id']
        this.getBillingsProduct(id);
  
      }else if(this.productUrlObject=='idC'){
        const id = this.productUrl['idC']
        this.getBillingsClients(id);
        
      }else{
        this.billingsService.getBillings().subscribe(
          (result: any) => {
            this.billings = result;
          }
        )
      }
    }

    deleteBilling(id:any){
      this.billingsService.deleteBilling(id).subscribe(
        (result: any) =>{
          console.log(result)
          this.validateGet();
        }
      )
    }

    toClient(idC:any){
      this.router.navigate([`/clients/${idC}`]);
    }

    toProduct(idP:any){
      this.router.navigate([`/products/${idP}`]);
    }


}
