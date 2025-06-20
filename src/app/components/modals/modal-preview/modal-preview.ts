import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TemplateCurriculo } from '../../template/template-curriculo/template-curriculo';

@Component({
  selector: 'app-modal-preview',
  templateUrl: './modal-preview.html',
  styleUrls: ['./modal-preview.css'],
  imports: [TemplateCurriculo],
})
export class PreviewModalComponent {
  @Input() template: string = 'classico';
  @Input() dados?: {
    inicio: any;
    experiencias: any[];
    skills: any[];
    educacao: any[];
    idiomas: any[];
    idade: number | null;
  };


  @Output() fechar = new EventEmitter();
  @Output() confirmar = new EventEmitter();

  confirmarImpressao() {
    this.confirmar.emit();
  }
}
