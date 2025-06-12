import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-experiencias',
  templateUrl: './modal-experiencias.html',
  imports: [FormsModule, CommonModule],
})
export class ModalExperienciasComponent {
  experiencia = '';

  constructor(public modalService: ModalService) {}

  adicionar() {
    if (this.experiencia.trim()) {
      this.modalService.experiencias.push(this.experiencia);
      this.experiencia = '';
    }
  }
  remover(exp: string): void {
   const index = this.modalService.experiencias.indexOf(exp);
      this.modalService.experiencias.splice(index, 1);
  }


  continuar() {
    this.modalService.avancarEtapa();
  }
  voltar(){
    this.modalService.voltarEtapa();
  }
}
