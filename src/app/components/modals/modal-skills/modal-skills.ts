import { Component, Input } from '@angular/core';
import { ModalService } from '../../../services/modal';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonFunctionsService } from '../../utils/global-functions';

@Component({
  selector: 'app-modal-skills',
  templateUrl: './modal-skills.html',
  styleUrl: './modal-skills.css',
  imports: [FormsModule, CommonModule],
})
export class ModalSkillsComponent {
  @Input() exibirControles: boolean = true;
  skill = '';

  constructor(public modalService: ModalService, public btnFn: ButtonFunctionsService) {}

}
