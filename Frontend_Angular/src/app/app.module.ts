import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { ReciboComponent } from './recibo/recibo.component';
import { HubComponent } from './hub/hub.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ReciboComponent,
    HubComponent,
    CadastroProdutosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
  RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
