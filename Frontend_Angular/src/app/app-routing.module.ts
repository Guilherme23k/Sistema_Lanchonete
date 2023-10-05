import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HubComponent } from './hub/hub.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';


const routes: Routes = [
  { path: '', component: HubComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'cadastro-produtos', component: CadastroProdutosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
