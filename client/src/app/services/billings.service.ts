import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class BillingsService {

  API_URL= 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  //clients service functions

  getBillings(){
    return this.http.get(`${this.API_URL}billing`)
  } 

  saveBilling(billing: any){
    return this.http.post(`${this.API_URL}billing/add`,billing);
  }

  deleteBilling(id: string){
    return this.http.delete(`${this.API_URL}billing/${id}`)
  }

  updateBilling(id: string, client: any){
    return this.http.put(`${this.API_URL}billing/${id}`,client)
  }

  //individual read function

  getBilling(id: any){
    return this.http.get(`${this.API_URL}billing/${id}`)
  }

  //relationships

  addRelationsToBilling(id: string, idC:string, idP:string, client: any){
    return this.http.put(`${this.API_URL}billing/${id}/addClient/${idC}/addProduct/${idP}`,client)
  }

  getProductBillings(id:any){
    return this.http.get(`${this.API_URL}billing/${id}/searchBillingsProduct`)
  }

  getClientsBillings(id:any){
    return this.http.get(`${this.API_URL}billing/${id}/searchBillingsClient`)
  }
}
