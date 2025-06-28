import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { ButtonFunctionsService } from '../../utils/global-functions';

@Component({
  selector: 'app-modal-inicio',
  templateUrl: './modal-inicio.html',
  styleUrl: './modal-inicio.css',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxMaskDirective],
  providers: [provideNgxMask({ dropSpecialCharacters: true })],
})
export class ModalInicioComponent implements OnInit {
  ngOnInit(): void {
  }
  @Input() exibirControles: boolean = true;

  nome = '';
  nascimento: number | null = null;
  contatoCel = '';
  contatoEmail = '';

  constructor(
    public modalService: ModalService,
    public btnFn: ButtonFunctionsService
  ) {}

  continuar() {
    if (!this.nome.trim()) {
      alert('Preencha seu nome.');
      return;
    }

    if (!this.contatoEmail.trim()) {
      alert('Preencha seu email.');
      return;
    }

    if (this.nascimento === null || this.nascimento.toString().length !== 8) {
      alert('Data de nascimento inválida. Necessita 8 números.');
      return;
    }

    if (!this.contatoCel || this.contatoCel.toString().length !== 11) {
      alert('Formato de celular inválido. Necessita 11 números.');
      return;
    }
  }
}
