import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-nome',
  templateUrl: './modal-nome.html',
  imports: [CommonModule, FormsModule],
})
export class ModalNomeComponent {
  nome = '';

  constructor(public modalService: ModalService) {}

  continuar() {
    if (this.nome.trim()) {
      this.modalService.nome = this.nome;
      this.modalService.avancarEtapa();
    }
  }
}
