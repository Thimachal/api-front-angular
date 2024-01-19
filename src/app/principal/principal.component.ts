import { Component } from '@angular/core';
import { Client } from '../model/Client';
import { ClientService } from '../service/client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
// Objeto do tipo Client
client = new Client();


  //variavel para visibilidade dos botões
  btnCadastro:boolean = true;


// json de clientes
clients:Client[] = [];

//Construtor
constructor(private service:ClientService){}

// Metodo de seleção
selecionar():void{
  this.service.selecionar()
  .subscribe(retorno => this.clients = retorno);
}

// Metodo de inicialiazação
 ngOnInit(){
  this.selecionar();
 }

}