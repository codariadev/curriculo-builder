import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';

interface Experiencia {
  empresa: string;
  cargo: string;
  descricao: string;
  dataInicio: string;
  dataFim: string;
  atual: boolean;
}

@Component({
  selector: 'app-modal-experiencias',
  templateUrl: './modal-experiencias.html',
  styleUrls: ['./modal-experiencias.css'],
  imports: [FormsModule, CommonModule, TextFieldModule],
})
export class ModalExperienciasComponent {
  empresa = '';
  cargo = '';
  descricao = '';
  dataInicio = '';
  dataFim = '';
  atual = false;

  constructor(public modalService: ModalService) {}

  adicionar() {
    const exp: Experiencia = {
      empresa: this.empresa,
      cargo: this.cargo,
      descricao: this.descricao,
      dataInicio: this.dataInicio,
      dataFim: this.dataFim,
      atual: this.atual,
    };

    this.modalService.experiencias.push(exp);

    // Limpar campos
    this.empresa = '';
    this.cargo = '';
    this.descricao = '';
    this.dataInicio = '';
    this.dataFim = '';
    this.atual = false;
  }

  remover(exp: Experiencia): void {
    const index = this.modalService.experiencias.indexOf(exp);
    if (index > -1) {
      this.modalService.experiencias.splice(index, 1);
    }
  }

  continuar() {
    this.modalService.avancarEtapa();
  }

  voltar() {
    this.modalService.voltarEtapa();
  }
}
