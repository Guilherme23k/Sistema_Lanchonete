import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.component.html',
  styleUrls: ['./recibo.component.css']
})
export class ReciboComponent implements OnInit{

  pedidoItens: any[] = [];

  dadosDisponiveis = false;


  constructor(private ProdutoService: ProductServiceService, private DataService: DataService) {}

  ngOnInit() {
      this.DataService.dadosDisponiveis$.subscribe(dadosDisponiveis => {
        if(dadosDisponiveis){
          this.pedidoItens = this.ProdutoService.getPedidoItens();

          console.log('Pedido Itens atualizado', this.pedidoItens);

          this.dadosDisponiveis = dadosDisponiveis;
        }
      });
  }




}
