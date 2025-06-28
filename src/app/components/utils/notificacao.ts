import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificacaoService {
  mensagem = '';
  ativa = false;

  exibir(mensagem: string) {
    this.mensagem = mensagem;
    this.ativa = true;

    setTimeout(() => {
      this.ativa = false;
      this.mensagem = '';
    }, 4000);
  }
}
