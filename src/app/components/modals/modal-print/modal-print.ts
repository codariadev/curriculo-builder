import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../../services/modal';

import { ModalEducacaoComponent } from '../modal-educacao/modal-educacao';
import { ModalIdiomasComponent } from '../modal-idiomas/modal-idiomas';
import { ModalInicioComponent } from '../modal-inicio/modal-inicio';
import { ModalSkillsComponent } from '../modal-skills/modal-skills';
import { ModalExperienciasComponent } from '../modal-experiencias/modal-experiencias';

@Component({
  standalone: true,
  selector: 'app-modal-print',
  imports: [CommonModule, FormsModule, ModalExperienciasComponent, ModalEducacaoComponent, ModalIdiomasComponent, ModalInicioComponent, ModalSkillsComponent],
  templateUrl: './modal-print.html',
  styleUrl: './modal-print.css'
})
export class ModalPrint {
  modalAberto: string | null = null;

   constructor(public modalService: ModalService) {}

   abrirModal(secao: string) {
    this.modalAberto = secao;
   }
   fecharModal(){
    this.modalAberto = null;
   }
}
