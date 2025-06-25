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
    PreviewModalComponent,
  ],
  templateUrl: './modal-print.html',
  styleUrl: './modal-print.css',
})
export class ModalPrint {
  ngOnInit() {
    console.log(this.modalService.inicio, this.modalService.experiencias, this.modalService.educacao, this.modalService.idiomas, this.modalService.skills)
  }

  formatarCelular(numero: string): string {
    if (!numero) return '';
    const digits = numero.replace(/\D/g, '');

    if (digits.length === 11) {
      return `(${digits.substr(0, 2)}) ${digits.substr(2, 5)}-${digits.substr(
        7,
        4
      )}`;
    }

    if (digits.length === 10) {
      return `(${digits.substr(0, 2)}) ${digits.substr(2, 4)}-${digits.substr(
        6,
        4
      )}`;
    }

    return numero;
  }

  templateSelecionado = 'classico';
  mostrarPreview = false;
  modalAberto: string | null = null;

  get dadosCompletos() {
    const nascimento = this.modalService.inicio.nascimento;
    if (nascimento == null) {
      return {
        inicio: this.modalService.inicio,
        experiencias: this.modalService.experiencias,
        skills: this.modalService.skills,
        educacao: this.modalService.educacao,
        idiomas: this.modalService.idiomas,
        idade: null,
      };
    }

    const nascimentoStr = nascimento.toString();

    if (nascimentoStr.length < 8) {
      return {
        inicio: this.modalService.inicio,
        experiencias: this.modalService.experiencias,
        skills: this.modalService.skills,
        educacao: this.modalService.educacao,
        idiomas: this.modalService.idiomas,
        idade: null,
      };
    }

    const ano = Number(nascimentoStr.substring(4, 8));
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - ano;

    return {
      inicio: this.modalService.inicio,
      experiencias: this.modalService.experiencias,
      skills: this.modalService.skills,
      educacao: this.modalService.educacao,
      idiomas: this.modalService.idiomas,
      idade: null,
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

  imprimir() {
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

  mapTipo: Record<string, string> = {
    medio: 'Ensino Médio',
    tecnico: 'Técnico',
    graduacao: 'Graduação',
    pos: 'Pós-graduação',
  };

  trad(chave: string, mapa: Record<string, string>): string {
    return mapa[chave] ?? chave;
  }
}
