import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BillingsService } from 'src/app/services/billings.service';

@Component({
  selector: 'app-clients-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  client: any = {
    id: 0,
    name:'',
    age:'',
    cellNumber:''
  }

  billings: any = [{
    clientName:''
  }]



  update:boolean = false;

  constructor(private clientService: ClientsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private billingsService:BillingsService
    ) { }

    urlId = this.activatedRoute.snapshot.params['id'];

  ngOnInit(){
    if (this.urlId){
      this.getClient()
    }
  }

  getClient(){
    this.clientService.getClient(this.urlId).subscribe(
      (result: any) =>{
        this.client = result;
        this.update = true;
      }
    )
  }



  saveClientData(){
    delete this.client.id;
    delete this.client.created_at;

    console.log(this.client)
    this.clientService.saveClient(this.client).subscribe(
      (result: any) => {
        this.client = result;
        this.router.navigate(['/clients']);
      }
    )
  }


  updateClientData(){
    this.clientService.updateClient(this.client.id,this.client).subscribe(
      (result: any) => {
        this.client = result;
         this.updateBillingClientName();
        this.router.navigate(['/clients']);

      }
    )
  }

  updateBillingClientName(){
    this.billingsService.getClientsBillings(this.client.id).subscribe(
      (result: any) => {
        this.billings = result;
        
          
        for( let i=0 ; i<this.billings.length; i++){
          this.billings[i].clientName = this.client.name;

          this.billingsService.updateBilling(this.billings[i].id,this.billings[i]).subscribe(
            (result: any) => {
            }
          )
        } 

      }
    )

  }

  validateClient(){
    if(this.update){
      this.updateClientData()
    }else{
      this.saveClientData()
    }
  }




}

