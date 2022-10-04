import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientsComponent } from './components/clients/clients.component';
import { ClientFormComponent } from './components/client-form/client-form.component'
import { ProductsComponent } from './components/products/products.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
