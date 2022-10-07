import { Conditional } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
 
  clients: any = [{
    id: 0,
    name:'',
    age:'',
    cellNumber:''
  }]

 
  constructor(
    private clientsService: ClientsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  url = this.activatedRoute.snapshot.params
  urlObject = Object.getOwnPropertyNames(this.activatedRoute.snapshot.params)[0]
    

  ngOnInit(){
    if(this.urlObject == 'idC'){
      this.singleClient()
    }else{
      this.get()
    }    
  }

  get(){
    delete this.clients.id;
    this.clientsService.getClients().subscribe(
      (result: any) => {
        this.clients = result;

      }
    )
  }

  deleteClient(id:any){
    
    this.clientsService.deleteClient(id).subscribe(
      (result: any) => {
        this.get();
      }
    )
  }

  update(id:any){
    this.router.navigate([`/clients/update/${id}`])
  }
  
  addService(id:any){
    this.router.navigate([`/clients/${id}/addProductToCLient`])
  }

  SeeBillings(id:any){
    this.router.navigate([`/clients/${id}/billingDelete`])

  }

  singleClient(){
    this.clientsService.getClient(this.url['idC']).subscribe(
      (result: any) => {
        this.clients[0] = result;
      }
    )
  }

}


