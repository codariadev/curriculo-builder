import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonFunctionsService } from '../../utils/global-functions';
import { ModalService } from '../../../services/modal';

@Component({
  selector: 'app-template-curriculo',
  imports: [CommonModule],
  templateUrl: './template-curriculo.html',
  styleUrl: './template-curriculo.css',
})
export class TemplateCurriculo {

  constructor(public btnFn: ButtonFunctionsService, public modalservice: ModalService){}

  @Input() tipoTemplate = 'classico';
  @Input() dados?: {
    inicio: any;
    experiencias: any[];
    skills: any[];
    educacao: any[];
    idiomas: any[];
    idade: number | null;
  };

}
