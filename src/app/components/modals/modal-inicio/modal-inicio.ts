import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { ButtonFunctionsService } from '../../utils/global-functions';

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
  nascimento: Date | null = null;
  contatoCel = '';
  contatoEmail = '';

  constructor(
    public modalService: ModalService,
    public btnFn: ButtonFunctionsService
  ) {}

  ngOnInit() {
    const dados = this.modalService.inicio;
    this.nome = dados.nome;
    this.nascimento = dados.nascimento ? new Date(dados.nascimento) : null;
    this.contatoCel = dados.contatoCel.toString();
    this.contatoEmail = dados.contatoEmail;
  }

  onNascimentoChange(value: string) {
    const partes = value.split('/');
    if (partes.length === 3) {
      const dia = Number(partes[0]);
      const mes = Number(partes[1]) - 1; // meses 0-based
      const ano = Number(partes[2]);
      this.nascimento = new Date(ano, mes, dia);
    } else {
      this.nascimento = null;
    }
  }

  continuar() {
  let nascimentoStr = '';

  if (this.nascimento instanceof Date) {
    const ano = this.nascimento.getFullYear();
    const mes = (this.nascimento.getMonth() + 1).toString().padStart(2, '0');
    const dia = this.nascimento.getDate().toString().padStart(2, '0');
    nascimentoStr = `${ano}-${mes}-${dia}`;  // formato ISO yyyy-MM-dd
  }

  this.btnFn.continuarInicio({
    nome: this.nome,
    nascimento: nascimentoStr,
    contatoCel: this.contatoCel,
    contatoEmail: this.contatoEmail,
  });
}
}
