import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientsComponent } from './components/clients/clients.component';
import { ClientFormComponent } from './components/client-form/client-form.component'
import { ProductsComponent } from './components/products/products.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';

import { AddProductToClientComponent } from './components/add-product-to-client/add-product-to-client.component';
import { ProductsInClientsComponent } from './components/products-in-clients/products-in-clients.component';
import { BillingFormComponent } from './components/billing-form/billing-form.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'/clients',
    pathMatch:'full'
  },

  {
    path:'clients',
    component:ClientsComponent
  },
  {
    path:'clients/add',
    component:ClientFormComponent
  },
  {
    path:'clients/update/:id',
    component:ClientFormComponent
  },


  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'products/add',
    component:ProductsFormComponent
  },
  {
    path:'products/update/:id',
    component:ProductsFormComponent
  },

  
  {
    path:'clients/:id/addProductToCLient',
    component:AddProductToClientComponent
  },
  {
  path:'products/:id/clients',
  component:ProductsInClientsComponent
  },


  {
    path:'billings',
    component:ProductsInClientsComponent
  },


  {
    path:'clients/:idC/billing/product/:idP',
    component:BillingFormComponent
  },
  {
    path:'clients/:idC/billingDelete',
    component:ProductsInClientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
