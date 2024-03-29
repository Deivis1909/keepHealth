import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AndressService {

  constructor(private httpClient: HttpClient) {
   }
   get(cep: string): Observable<any> {
    // Concatenando o URL do ViaCEP com o CEP fornecido
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    // Realizando a chamada GET para a API do ViaCEP e retornando a resposta
    return this.httpClient.get(url);
  }
}
