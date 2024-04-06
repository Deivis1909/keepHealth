import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private httpClient: HttpClient) {
   }

  getAddress(cep: string): Observable<any> {
    // Concatenando o URL do ViaCEP com o CEP fornecido
    return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json`);
  }
}
