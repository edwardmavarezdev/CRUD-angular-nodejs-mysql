import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductsComponent } from './components/products/products.component';
import { ClientsComponent } from './components/clients/clients.component';

import { ClientsService } from './services/clients.service';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { AddProductToClientComponent } from './components/add-product-to-client/add-product-to-client.component';
import { ProductsInClientsComponent } from './components/products-in-clients/products-in-clients.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductsComponent,
    ClientsComponent,
    ClientFormComponent,
    ProductsFormComponent,
    AddProductToClientComponent,
    ProductsInClientsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
     ClientsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
//2:34