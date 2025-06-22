import { Component, Input } from '@angular/core';
import { ModalService } from '../../../services/modal';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonFunctionsService } from '../../utils/global-functions';

@Component({
  selector: 'app-modal-idiomas',
  templateUrl: './modal-idiomas.html',
  styleUrl: './modal-idiomas.css',
  imports: [FormsModule, CommonModule],
})
export class ModalIdiomasComponent {
  @Input() exibirControles: boolean = true;
  idioma = '';

  constructor(public modalService: ModalService, public btnFn: ButtonFunctionsService) {}

}
