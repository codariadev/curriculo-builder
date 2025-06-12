import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-idiomas',
  templateUrl: './modal-idiomas.html',
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

  finalizar() {
    console.log('Currículo finalizado!', this.modalService);
    alert('Currículo finalizado com sucesso!');
    this.modalService.resetar();
  }
}
