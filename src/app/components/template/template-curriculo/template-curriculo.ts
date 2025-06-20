import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-template-curriculo',
  imports: [CommonModule],
  templateUrl: './template-curriculo.html',
  styleUrl: './template-curriculo.css',
})
export class TemplateCurriculo {
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

