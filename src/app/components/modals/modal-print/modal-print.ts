import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../../services/modal';

import { ModalEducacaoComponent } from '../modal-educacao/modal-educacao';
import { ModalIdiomasComponent } from '../modal-idiomas/modal-idiomas';
import { ModalInicioComponent } from '../modal-inicio/modal-inicio';
import { ModalSkillsComponent } from '../modal-skills/modal-skills';
import { ModalExperienciasComponent } from '../modal-experiencias/modal-experiencias';
import { PreviewModalComponent } from '../modal-preview/modal-preview';

@Component({
  standalone: true,
  selector: 'app-modal-print',
  imports: [
    CommonModule,
    FormsModule,
    ModalExperienciasComponent,
    ModalEducacaoComponent,
    ModalIdiomasComponent,
    ModalInicioComponent,
    ModalSkillsComponent,
    PreviewModalComponent
  ],
  templateUrl: './modal-print.html',
  styleUrl: './modal-print.css',
})
export class ModalPrint {
  templateSelecionado = 'classico';
  mostrarPreview = false;
  modalAberto: string | null = null;

  getIdade(nascimento: string): number | null {
  if (!nascimento) return null;
  const anoNascimento = parseInt(nascimento.split('-')[0], 10);
  const anoAtual = new Date().getFullYear();
  return anoAtual - anoNascimento;
}

  get dadosCompletos() {
  return {
    inicio: this.modalService.inicio,
    experiencias: this.modalService.experiencias,
    skills: this.modalService.skills,
    educacao: this.modalService.educacao,
    idiomas: this.modalService.idiomas,
    idade: this.getIdade(this.modalService.inicio.nascimento),
  };
}

  constructor(public modalService: ModalService) {}

  abrirModal(secao: string) {
    this.modalAberto = secao;
  }
  fecharModal() {
    this.modalAberto = null;
  }

  abrirPreview() {
    this.mostrarPreview = true;
  }
   voltar() {
    this.modalService.voltarEtapa();
  }

  imprimir () {
    setTimeout(() => {
      const area = document.getElementById('area-impressao');
      const conteudo = area?.innerHTML;
      const original = document.body.innerHTML;

      if (conteudo) {
        document.body.innerHTML = conteudo;
        window.print();
        document.body.innerHTML = original;
        window.location.reload();
      }
    }, 100);
  }
}
