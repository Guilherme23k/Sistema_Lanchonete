import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private apiUrl = 'http://localhost:8080/api/produtos';

  private pedidoItens: any[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  setPedidoItens(data: any[]){
    this.pedidoItens = data;
  }

  getPedidoItens() {
    return this.pedidoItens
  }
}
