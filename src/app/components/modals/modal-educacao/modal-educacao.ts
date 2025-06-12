import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-educacao',
  templateUrl: './modal-educacao.html',
  imports: [FormsModule, CommonModule],
})
export class ModalEducacaoComponent {
  curso = '';

  constructor(public modalService: ModalService) {}

  adicionar() {
    if (this.curso.trim()) {
      this.modalService.educacao.push(this.curso);
      this.curso = '';
    }
  }

  continuar() {
    this.modalService.avancarEtapa();
  }
}
