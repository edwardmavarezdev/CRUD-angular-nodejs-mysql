import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-add-product-to-client',
  templateUrl: './add-product-to-client.component.html',
  styleUrls: ['./add-product-to-client.component.css']
})
export class AddProductToClientComponent implements OnInit {

  products: any = [{
    id: 0,
    name:'',
    price:''
  }]

  clients: any = [{
    id: 0,
    name:'',
    age:'',
    cellNumber:'',
    address:'',
    productId:''
  }]
 


  constructor(
    private productsService:ProductsService,
    private activatedRoute:ActivatedRoute,
    private clientService: ClientsService,
    private router: Router
    ) { }


  ClientUrl = this.activatedRoute.snapshot.params['id']

  ngOnInit(): void {
    this.getData()
  }


  getData(){
    this.productsService.getProducts().subscribe(
      (result: any) => {
        this.products = result;
      }
    );

    delete this.clients.id;
    this.clientService.getClient(this.ClientUrl).subscribe(
      (result: any) => {
        this.clients = result;
      }
    );
  }
   
  selectThisProduct(id:any){
    this.clients.ProductId = id;
     this.clientService.addProductToClient(this.clients.id,this.clients).subscribe(
      (result: any) => {
        this.clients = result;
        this.router.navigate(['/clients']);
      }
    )
  }
  
}
