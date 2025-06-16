import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgxMaskDirective, provideNgxMask} from 'ngx-mask'


interface Nome{
  nome: string;
  nascimento: string;
  contatoCel: string;
  contatoEmail: string;
}

@Component({
  selector: 'app-modal-inicio',
  templateUrl: './modal-inicio.html',
  styleUrl: './modal-inicio.css',
  imports: [CommonModule, FormsModule, NgxMaskDirective],
  providers: [provideNgxMask({dropSpecialCharacters: true})]
})
export class ModalInicioComponent {
  nome = '';
  nascimento = '';
  contatoCel = '';
  contatoEmail = '';

  constructor(public modalService: ModalService) {}

  continuar() {
    const inicio: Nome = {
      nome: this.nome,
      nascimento: this.nascimento,
      contatoCel: this.contatoCel,
      contatoEmail: this.contatoEmail,
    }
    this.modalService.avancarEtapa();
  }
  voltar() {
    this.modalService.voltarEtapa();
  }
}
