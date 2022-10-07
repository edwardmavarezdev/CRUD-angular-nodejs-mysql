import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
  

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  API_URL= 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  //clients service functions

  getClients(){
    return this.http.get(`${this.API_URL}clients`)
  } 

  saveClient(client: any){
    return this.http.post(`${this.API_URL}clients/add`,client);
  }

  deleteClient(id: string){
    return this.http.delete(`${this.API_URL}clients/${id}`)
  }

  updateClient(id: string, client: any){
    return this.http.put(`${this.API_URL}clients/${id}`,client)
  }

  //individual read function

  getClient(id: any){
    return this.http.get(`${this.API_URL}clients/${id}`)
  }

  //relationships

  addProductToClient(id: string, client: any){
    return this.http.put(`${this.API_URL}clients/${id}/addProduct`,client)
  }

}

