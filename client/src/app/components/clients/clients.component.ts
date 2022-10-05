import { Conditional } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Router } from '@angular/router';


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
    cellNumber:'',
    address:'',
    ProductId:''
  }]

 
  constructor(private clientsService: ClientsService, private router: Router) { }

  ngOnInit(){
    this.get()
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
        console.log(result);
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

}


