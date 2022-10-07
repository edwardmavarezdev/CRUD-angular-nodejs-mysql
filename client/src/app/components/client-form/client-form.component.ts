import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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

  update:boolean = false;

  constructor(private clientService: ClientsService, private router: Router, private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit(){
    const urlId = this.activatedRoute.snapshot.params['id'];
    if (urlId){
      this.clientService.getClient(urlId).subscribe(
        (result: any) =>{
          this.client = result;
          this.update = true;
        }
      )
    }
  }

  saveClientData(){
    delete this.client.id;
    delete this.client.created_at;

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
        this.router.navigate(['/clients']);
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

