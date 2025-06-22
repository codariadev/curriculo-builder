import { Component, Input } from '@angular/core';
import { ModalService } from '../../../services/modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ButtonFunctionsService } from '../../utils/global-functions';

@Component({
  selector: 'app-modal-experiencias',
  templateUrl: './modal-experiencias.html',
  styleUrls: ['./modal-experiencias.css'],
  imports: [FormsModule, CommonModule, TextFieldModule],
})
export class ModalExperienciasComponent {
  @Input() exibirControles: boolean = true;

  constructor(
    public modalService: ModalService,
    public btnFn: ButtonFunctionsService
  ) {}

  empresa = '';
  cargo = '';
  descricao = '';
  dataInicio = '';
  dataFim = '';
  atual = false;
}
