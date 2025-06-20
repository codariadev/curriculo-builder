import { Component, Input } from '@angular/core';
import { ModalService } from '../../../services/modal';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-skills',
  templateUrl: './modal-skills.html',
  styleUrl: './modal-skills.css',
  imports: [FormsModule, CommonModule],
})
export class ModalSkillsComponent {
  @Input() exibirControles: boolean = true;
  skill = '';

  constructor(public modalService: ModalService) {}

  adicionar() {
    if (this.skill.trim()) {
      this.modalService.skills.push(this.skill);
      this.skill = '';
    }
  }
  remover(skill: string): void {
    const index = this.modalService.skills.indexOf(skill);
    if (index > -1) {
      this.modalService.skills.splice(index, 1)
    }
  }

  continuar() {
    this.modalService.avancarEtapa();
  }
  voltar() {
    this.modalService.voltarEtapa();
  }
}
