import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  // url da api exatamente igual ao do verbo no backend
  private url:string = 'http://localhost:8080/clients/allClients';

  // construtor
  constructor(private http:HttpClient){

  }

  // Método para selecionar todos os clientes
  selecionar():Observable<Client[]>{
    return this.http.get<Client[]>(this.url);
  }
}
