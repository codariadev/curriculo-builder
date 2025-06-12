import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-skills',
  templateUrl: './modal-skills.html',
  imports: [FormsModule, CommonModule],
})
export class ModalSkillsComponent {
  skill = '';

  constructor(public modalService: ModalService) {}

  adicionar() {
    if (this.skill.trim()) {
      this.modalService.skills.push(this.skill);
      this.skill = '';
    }
  }

  continuar() {
    this.modalService.avancarEtapa();
  }
}
