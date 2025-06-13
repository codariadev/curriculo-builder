import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgxMaskDirective, provideNgxMask} from 'ngx-mask'

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
    // if (this.nome.trim()) {
    //   this.modalService.nome = this.nome;
    // }
    this.modalService.avancarEtapa();
  }
  voltar() {
    this.modalService.voltarEtapa();
  }
}
