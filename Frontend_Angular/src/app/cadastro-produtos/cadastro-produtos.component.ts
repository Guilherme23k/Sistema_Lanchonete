import { Component } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Produto } from '../interface/produto';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent {

  produto: Produto = {
    nome: '',
    price: 0,
    image: '',
  };

  constructor(private productService : ProductServiceService) {}

  onSubmit(): void {
    this.productService.postProducts(this.produto).subscribe((response) =>{
      console.log('Produto Criado', response)
    }, (error) =>{
      console.error('Ocorreu um erro', error);
    })
  }

}
