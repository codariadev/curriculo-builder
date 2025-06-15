import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-educacao',
  templateUrl: './modal-educacao.html',
  styleUrl: './modal-educacao.css',
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class ModalEducacaoComponent implements OnInit {
  tipoEducacao = '';
  formacao = '';
  instituicao = '';
  localizacao = '';
  dataConclusao = '';
  concluido = false;
  estados: any[] = [];

  constructor(public modalService: ModalService, private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .subscribe((data) => {
        this.estados = data.sort((a, b) => a.nome.localeCompare(b.nome));
      });
  }

  adicionar() {
    if (this.tipoEducacao && this.instituicao && this.localizacao && this.dataConclusao) {
      const educacao = {
        tipo: this.tipoEducacao,
        formacao: this.formacao,
        instituicao: this.instituicao,
        estado: this.localizacao,
        conclusao: this.dataConclusao,
        concluido: this.concluido,
      };

      this.modalService.educacao.push(educacao);

      this.tipoEducacao = '';
      this.formacao = '';
      this.instituicao = '';
      this.localizacao = '';
      this.dataConclusao = '';
      this.concluido = false;
    }
  }

  remover(educacao: any): void {
    const index = this.modalService.educacao.indexOf(educacao);
    if (index > -1) {
      this.modalService.educacao.splice(index, 1);
    }
  }

  continuar() {
    this.modalService.avancarEtapa();
  }

  voltar() {
    this.modalService.voltarEtapa();
  }
}
