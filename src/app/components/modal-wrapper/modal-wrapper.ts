import { Component } from '@angular/core';
import { ModalService } from '../../services/modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalNomeComponent } from "../modals/modal-nome/modal-nome";
import { ModalExperienciasComponent } from "../modals/modal-experiencias/modal-experiencias";
import { ModalSkillsComponent } from "../modals/modal-skills/modal-skills";
import { ModalEducacaoComponent } from "../modals/modal-educacao/modal-educacao";
import { ModalIdiomasComponent } from "../modals/modal-idiomas/modal-idiomas";

@Component({
  selector: 'app-modal-wrapper',
  templateUrl: './modal-wrapper.html',
  imports: [FormsModule, CommonModule, ModalNomeComponent, ModalExperienciasComponent, ModalSkillsComponent, ModalEducacaoComponent, ModalIdiomasComponent],
  standalone: true,
})
export class ModalWrapperComponent {
  constructor(public modalService: ModalService) {}
}
