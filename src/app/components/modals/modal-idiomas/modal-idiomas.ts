import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-idiomas',
  templateUrl: './modal-idiomas.html',
  styleUrl: './modal-idiomas.css',
  imports: [FormsModule, CommonModule],
})
export class ModalIdiomasComponent {
  idioma = '';

  constructor(public modalService: ModalService) {}

  adicionar() {
    if (this.idioma.trim()) {
      this.modalService.idiomas.push(this.idioma);
      this.idioma = '';
    }
  }
  remover(idioma: string): void {
    const index = this.modalService.idiomas.indexOf(idioma);
    if (index > -1) {
      this.modalService.idiomas.splice(index, 1)
    }
  }
  voltar() {
    this.modalService.voltarEtapa();
  }

  finalizar() {
    console.log('Currículo finalizado!', this.modalService);
    alert('Currículo finalizado com sucesso!');
    this.modalService.resetar();
  }
}
