import { Component } from '@angular/core';
import { Client } from '../model/Client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  //variavel para visibilidade dos botões
  btnCadastro:boolean = true;


// json de clientes
clients:Client[] = [];

//Construtor

constructor(private service:ClientService){}

// Metodo de seleção
selecionar():void{
  this.service.selecionar().subscribe(retorno => this.clients = retorno);
}

}