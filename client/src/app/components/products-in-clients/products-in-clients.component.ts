import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-in-clients',
  templateUrl: './products-in-clients.component.html',
  styleUrls: ['./products-in-clients.component.css']
})
export class ProductsInClientsComponent implements OnInit {

  clients: any = [{
    id: 0,
    name:'',
    age:'',
    cellNumber:'',
    address:'',
    ProductId:''
  }]

  constructor(
    private activatedRoute:ActivatedRoute,
    private productsService: ProductsService
    ) { }

  productUrl = this.activatedRoute.snapshot.params['id'];

  ngOnInit(): void {
    this.getAfiliated(this.productUrl)
  }

  getAfiliated(id:any){
    delete this.clients.id;
    this.productsService.getClientsInProducts(id).subscribe(
        (result: any) => {
          this.clients = result
    })
  }

}
