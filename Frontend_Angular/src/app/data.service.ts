import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


   private dadosDisponiveisSource = new BehaviorSubject<boolean>(false);
  dadosDisponiveis$ = this.dadosDisponiveisSource.asObservable();

  constructor() {}

  setDadosDisponiveis(dadosDisponiveis: boolean) {
    this.dadosDisponiveisSource.next(dadosDisponiveis);
  }
}
