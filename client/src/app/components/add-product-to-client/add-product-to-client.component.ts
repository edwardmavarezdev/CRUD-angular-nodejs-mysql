import { Component, OnInit } from '@angular/core';
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

  select :boolean = false; 

  constructor(
    private productsService:ProductsService,
    private activatedRoute:ActivatedRoute,
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
  }
   
  selectThisProduct(id:any){
        this.router.navigate([`/clients/${this.ClientUrl}/billing/product/${id}`]);
  }

  
}
