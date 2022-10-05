
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URL= 'http://localhost:3000/'

  constructor(private http: HttpClient) { }


  //products service functions

  getProducts(){
    return this.http.get(`${this.API_URL}products`)
  } 

  saveProduct(product: any){
    return this.http.post(`${this.API_URL}products/add`,product);
  }

  deleteProduct(id: string){
    return this.http.delete(`${this.API_URL}products/${id}`)
  }

  updateProduct(id: string, product: any){
    return this.http.put(`${this.API_URL}products/${id}`,product)
  }

  //individual read function

  getProduct(id: string){
    return this.http.get(`${this.API_URL}products/${id}`)
  }

  //relationships
  
  getClientsInProducts(id: string){
    return this.http.get(`${this.API_URL}products/${id}/clients`)
  }


}
