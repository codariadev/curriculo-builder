import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Estado {
  id: number;
  sigla: string;
  nome: string;
}

@Injectable({
  providedIn: 'root',
})
export class IbgeService {
  private estadosUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

  constructor(private http: HttpClient) {}

  getEstados(): Observable<Estado[]> {
    return this.http.get<Estado[]>(this.estadosUrl);
  }
}
