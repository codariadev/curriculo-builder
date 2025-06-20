import { Component, Input } from '@angular/core';
import { ModalService } from '../../../services/modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-educacao',
  templateUrl: './modal-educacao.html',
  styleUrls: ['./modal-educacao.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class ModalEducacaoComponent {
  @Input() exibirControles: boolean = true;
  tipoEducacao = '';
  formacao = '';
  instituicao = '';
  localizacao = '';
  dataConclusao = '';
  concluido = false;
  estados = [
    { sigla: 'AC', nome: 'Acre' },
    { sigla: 'AL', nome: 'Alagoas' },
    { sigla: 'AP', nome: 'Amapá' },
    { sigla: 'AM', nome: 'Amazonas' },
    { sigla: 'BA', nome: 'Bahia' },
    { sigla: 'CE', nome: 'Ceará' },
    { sigla: 'DF', nome: 'Distrito Federal' },
    { sigla: 'ES', nome: 'Espírito Santo' },
    { sigla: 'GO', nome: 'Goiás' },
    { sigla: 'MA', nome: 'Maranhão' },
    { sigla: 'MT', nome: 'Mato Grosso' },
    { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { sigla: 'MG', nome: 'Minas Gerais' },
    { sigla: 'PA', nome: 'Pará' },
    { sigla: 'PB', nome: 'Paraíba' },
    { sigla: 'PR', nome: 'Paraná' },
    { sigla: 'PE', nome: 'Pernambuco' },
    { sigla: 'PI', nome: 'Piauí' },
    { sigla: 'RJ', nome: 'Rio de Janeiro' },
    { sigla: 'RN', nome: 'Rio Grande do Norte' },
    { sigla: 'RS', nome: 'Rio Grande do Sul' },
    { sigla: 'RO', nome: 'Rondônia' },
    { sigla: 'RR', nome: 'Roraima' },
    { sigla: 'SC', nome: 'Santa Catarina' },
    { sigla: 'SP', nome: 'São Paulo' },
    { sigla: 'SE', nome: 'Sergipe' },
    { sigla: 'TO', nome: 'Tocantins' },
  ];

  constructor(public modalService: ModalService) {}

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
