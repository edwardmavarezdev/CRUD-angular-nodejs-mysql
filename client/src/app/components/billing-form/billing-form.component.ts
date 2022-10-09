import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from '../../services/clients.service';
import { ProductsService } from 'src/app/services/products.service';
import { BillingsService } from 'src/app/services/billings.service';
import { NavigationComponent } from '../navigation/navigation.component';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.css']
})
export class BillingFormComponent implements OnInit {

  client: any = {
    id:'',
    name:'',
    identityCard:'',
    age:'',
    cellNumber:''
  }

  product: any = {
    id:'',
    name:'',
    price:''
  }

  billings: any = {
    id: 0,
    clientName : '',
    clientIdentityCard:'',
    clientAge:'',
    clientCellNumber:'',
    serviceName : '',
    servicePrice:'',
    locationProduct : '',
    afiliatedPrice : '',
    fiscalAddress : ''
  } 

  constructor(
    private activatedRoute : ActivatedRoute,
    private clientsService : ClientsService,
    private productsService : ProductsService,
    private billingsService : BillingsService,
    private router : Router
    ) { }

 

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    const urlClient = this.activatedRoute.snapshot.params['idC'];
    this.clientsService.getClient(urlClient).subscribe(
      (result: any) => {
        this.client = result;
        console.log(this.client)
       this.billings.clientName = this.client.name;
       this.billings.clientIdentityCard = this.client.identityCard;
       this.billings.clientAge = this.client.age;
       this.billings.clientCellNumber = this.client.cellNumber;

      }
    );
    const urlProduct = this.activatedRoute.snapshot.params['idP'];
    this.productsService.getProduct(urlProduct).subscribe(
      (result: any) => {
        this.product = result;
        console.log(this.product)
         this.billings.serviceName = this.product.name;
         this.billings.servicePrice = this.product.price;
      }
    );
  }

  test(){
    const urlClient = this.activatedRoute.snapshot.params['idC'];
    const urlProduct = this.activatedRoute.snapshot.params['idP'];

    this.billingsService.saveBilling(this.billings).subscribe(
      (result: any) => {
        this.billings = result;
        
        this.billingsService.addRelationsToBilling(this.billings.id,urlClient,urlProduct,this.billings).subscribe(
          (result: any) => {
            this.billings = result;
          this.router.navigate(['/clients']);

          }
        )
        
        
      }
    )

    
  }
}
