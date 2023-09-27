import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  dadosDisponiveis = false;

  pedidoItens: any[] = [];

  //Usado apenas para o get dos produtos lá no banco de dados
  produtos: any[] = [];

  constructor(private ProductService: ProductServiceService,private DataService: DataService ) {
  
    this.DataService.dadosDisponiveis$.subscribe(dadosDisponiveis => {
      this.dadosDisponiveis = dadosDisponiveis;
    })

  }

  ngOnInit(): void {
    this.ProductService.getProducts().subscribe((data: any[]) =>{
      this.produtos = data;
    })
  }

  adicionarProduto(produto: any){
    produto.quantidade += 1;
  }

  removerProduto(produto: any){
    if (produto.quantidade > 0) {
      produto.quantidade -= 1;
    }
  }

  enviarParaPedido(produto: any) {

    if (produto.quantidade > 0){
      const itemPedido = {
        produto: produto.nome,
        quantidade: produto.quantidade,
        precoUnitario: produto.price,
        precoTotal: produto.price * produto.quantidade,
      };

      this.pedidoItens.push(itemPedido);

      produto.quantidade = 0;

      console.log('Produto enviado para pedido')
    }
  }

  
  finalizarPedido() {
    if (this.pedidoItens.length > 0) {
      console.log('Itens do Pedido:', this.pedidoItens);
      this.ProductService.setPedidoItens(this.pedidoItens);
      this.DataService.setDadosDisponiveis(true);
    } else {
      console.log('Nenhum item no pedido');
      this.DataService.setDadosDisponiveis(false);
    }
  }

}
