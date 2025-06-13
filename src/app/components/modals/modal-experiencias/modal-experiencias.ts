import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-experiencias',
  templateUrl: './modal-experiencias.html',
  styleUrls: ['./modal-experiencias.css'],
  imports: [FormsModule, CommonModule],
})
export class ModalExperienciasComponent {
  empresa: string = '';
  cargo: string = '';
  descricao: string = '';
  dataInicio: string = '';
  dataFim: string = '';
  atual: boolean = false;

  // Armazenamento de experiências
  experiencias: string[] = [];

  constructor(public modalService: ModalService) {}

  adicionar() {
    const exp = `${this.empresa} - ${this.cargo} (${this.dataInicio} até ${
      this.atual ? 'Atual' : this.dataFim
    })`;
    this.modalService.experiencias.push(exp);

    // Limpar campos (opcional)
    this.empresa = '';
    this.cargo = '';
    this.descricao = '';
    this.dataInicio = '';
    this.dataFim = '';
    this.atual = false;
  }
  remover(exp: string): void {
    const index = this.modalService.experiencias.indexOf(exp);
    this.modalService.experiencias.splice(index, 1);
  }

  continuar() {
    this.modalService.avancarEtapa();
  }
  voltar() {
    this.modalService.voltarEtapa();
  }
}
