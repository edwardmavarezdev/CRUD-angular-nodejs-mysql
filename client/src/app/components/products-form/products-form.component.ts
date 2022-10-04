import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service'; 
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  product: any = {
    id: 0,
    name:'',
    price:''
  } 

  update:boolean = false;


  constructor(private productsService: ProductsService, private router: Router, private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit(){
    const urlId = this.activatedRoute.snapshot.params['id'];
    if (urlId){
      this.productsService.getProduct(urlId).subscribe(
        (result: any) =>{
          this.product = result;
          this.update = true;
          console.log(this.product)
        }
      )
    }
  }

  saveClientData(){
    delete this.product.id;
    delete this.product.created_at;

    this.productsService.saveProduct(this.product).subscribe(
      (result: any) => {
        this.product = result;
        this.router.navigate(['/products']);
      }
    )
  }

  updateClientData(){
    this.productsService.updateProduct(this.product.id,this.product).subscribe(
      (result: any) => {
        this.product = result;
        this.router.navigate(['/products']);
      }
    )
  
  }

  validateProduct(){
    if(this.update){
      this.updateClientData()
    }else{
      this.saveClientData()
    }
  }

}
