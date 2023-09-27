import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.css']
})
export class HubComponent {

  constructor(private router: Router){}

  redirecionarParaDestino(){
    this.router.navigate(['/pagina-destino']);
  }

}
