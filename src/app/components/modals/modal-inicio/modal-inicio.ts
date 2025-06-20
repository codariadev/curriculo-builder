import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

interface Nome {
  nome: string;
  nascimento: string;
  contatoCel: string;
  contatoEmail: string;
}

@Component({
  selector: 'app-modal-inicio',
  templateUrl: './modal-inicio.html',
  styleUrl: './modal-inicio.css',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxMaskDirective],
  providers: [provideNgxMask({ dropSpecialCharacters: true })],
})
export class ModalInicioComponent implements OnInit {
  @Input() exibirControles: boolean = true;
  nome = '';
  nascimento = '';
  contatoCel = '';
  contatoEmail = '';

  constructor(public modalService: ModalService) {}

  ngOnInit() {
    const dados = this.modalService.inicio;
    this.nome = dados.nome;
    this.nascimento = dados.nascimento;
    this.contatoCel = dados.contatoCel.toString();
    this.contatoEmail = dados.contatoEmail;
  }

  continuar() {
    this.modalService.inicio = {
      nome: this.nome,
      nascimento: this.nascimento,
      contatoCel: Number(this.contatoCel),
      contatoEmail: this.contatoEmail,
    };
    this.modalService.avancarEtapa();
  }

  voltar() {
    this.modalService.voltarEtapa();
  }
}
