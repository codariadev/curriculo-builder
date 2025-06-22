import { Component, Input } from '@angular/core';
import { ModalService } from '../../../services/modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonFunctionsService } from '../../utils/global-functions';

@Component({
  selector: 'app-modal-educacao',
  templateUrl: './modal-educacao.html',
  styleUrls: ['./modal-educacao.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class ModalEducacaoComponent {
  @Input() exibirControles: boolean = true;

  mapTipo: Record<string, string> = {
    medio: 'Ensino Médio',
    tecnico: 'Técnico',
    graduacao: 'Graduação',
    pos: 'Pós-graduação',
  };

  mapFormacao: Record<string, string> = {
    'ensino-medio-completo': 'Completo',
    'ensino-medio-incompleto': 'Incompleto',
  };

  trad(chave: string, mapa: Record<string, string>): string {
    return mapa[chave] ?? chave;
  }

  constructor(
    public modalService: ModalService,
    public btnFn: ButtonFunctionsService
  ) {}
}
