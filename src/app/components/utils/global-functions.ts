import { Injectable } from '@angular/core';
import {
  ModalService,
  Experiencia,
  Educacao,
  Inicio,
} from '../../services/modal';
import { NotificacaoService } from './notificacao';

@Injectable({
  providedIn: 'root',
})
export class ButtonFunctionsService {
  empresa = '';
  cargo = '';
  descricao = '';
  dataInicio = '';
  dataFim = '';
  atual = false;

  tipoEducacao = '';
  formacao = '';
  instituicao = '';
  localizacao = '';
  dataConclusao = '';
  concluido = false;

  editandoItem: string | null = null;

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

  constructor(
    private modalService: ModalService,
    private notificacaoService: NotificacaoService
  ) {}

  continuarInicio(
    nome: string,
    nascimento: number | null,
    contatoCel: string,
    contatoEmail: string
  ) {
    const init: Inicio = {
      nome,
      nascimento,
      contatoCel,
      contatoEmail,
    };

    this.modalService.inicio = init;
    console.log('Inicio salvo:', this.modalService.inicio);
    this.modalService.avancarEtapa();
  }

  salvarInicio(
    nome: string,
    nascimento: number | null,
    contatoCel: string,
    contatoEmail: string
  ) {
    const init: Inicio = {
      nome,
      nascimento,
      contatoCel,
      contatoEmail,
    };

    this.modalService.inicio = init;
    this.notificacaoService.exibir('Dados Salvos com sucesso');
  }

  continuarPadrao(): void {
    this.modalService.avancarEtapa();
  }

  adicionarExp(
    empresa: string,
    cargo: string,
    descricao: string,
    dataInicio: string,
    dataFim: string,
    atual: boolean
  ) {
    const exp: Experiencia = {
      empresa,
      cargo,
      descricao,
      dataInicio: this.formatarData(dataInicio),
      dataFim: atual ? '' : this.formatarData(dataFim),
      atual,
    };

    this.modalService.experiencias.push(exp);
    console.log(this.modalService.experiencias);
    this.notificacaoService.exibir('Dados Salvos com sucesso');

    this.empresa = '';
    this.cargo = '';
    this.descricao = '';
    this.dataInicio = '';
    this.dataFim = '';
    this.atual = false;
  }

  removerExp(exp: Experiencia): void {
    const index = this.modalService.experiencias.indexOf(exp);
    if (index > -1) {
      this.modalService.experiencias.splice(index, 1);
    }
  }

  adicionarSkill(skill: string) {
    if (skill.trim()) {
      this.modalService.skills.push(skill);
      this.notificacaoService.exibir('Dados Salvos com sucesso');
    }
  }

  removerSkill(skill: string): void {
    const index = this.modalService.skills.indexOf(skill);
    if (index > -1) {
      this.modalService.skills.splice(index, 1);
    }
  }

  adicionarIdioma(idioma: string) {
    if (idioma.trim()) {
      this.modalService.idiomas.push(idioma);
      this.notificacaoService.exibir('Dados Salvos com sucesso');
    }
  }

  removerIdioma(idioma: string): void {
    const index = this.modalService.idiomas.indexOf(idioma);
    if (index > -1) {
      this.modalService.idiomas.splice(index, 1);
    }
  }

  adicionarEdu() {
    if (this.tipoEducacao && this.instituicao && this.localizacao) {
      const educacao: Educacao = {
        id: crypto.randomUUID(),
        tipo: this.tipoEducacao,
        formacao: this.formacao,
        instituicao: this.instituicao,
        estado: this.localizacao,
        conclusao: this.concluido ? this.formatarData(this.dataConclusao) : '',
        concluido: this.concluido,
      };
      this.modalService.educacao.push(educacao);
      this.notificacaoService.exibir('Dados Salvos com sucesso');
      this.resetCampos();
    }
  }

  removerEdu(educacao: Educacao): void {
    const index = this.modalService.educacao.findIndex(
      (e) => e.id === educacao.id
    );
    if (index > -1) {
      this.modalService.educacao.splice(index, 1);
    }
    if (this.editandoItem === educacao.id) {
      this.editandoItem = null;
      this.resetCampos();
    }
  }

  editarEdu(educ: Educacao) {
    this.editandoItem = educ.id;
    this.tipoEducacao = educ.tipo;
    this.formacao = educ.formacao;
    this.instituicao = educ.instituicao;
    this.localizacao = educ.estado;
    this.dataConclusao = educ.conclusao;
    this.concluido = educ.concluido;
  }

  salvarEdu() {
    if (!this.editandoItem) return;

    const index = this.modalService.educacao.findIndex(
      (e) => e.id === this.editandoItem
    );
    if (index === -1) return;

    this.modalService.educacao[index] = {
      ...this.modalService.educacao[index],
      tipo: this.tipoEducacao,
      formacao: this.formacao,
      instituicao: this.instituicao,
      estado: this.localizacao,
      conclusao: this.concluido ? this.formatarData(this.dataConclusao) : '',
      concluido: this.concluido,
      id: this.editandoItem,
    };

    this.editandoItem = null;
    this.notificacaoService.exibir('Dados Salvos com sucesso');
    this.resetCampos();
  }

  voltar() {
    this.modalService.voltarEtapa();
  }

  private resetCampos() {
    this.tipoEducacao = '';
    this.formacao = '';
    this.instituicao = '';
    this.localizacao = '';
    this.dataConclusao = '';
    this.concluido = false;
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

  formatarData(dataConclusao: string): string {
    console.log('formatarData called with:', dataConclusao);
    if (!dataConclusao || dataConclusao.length !== 8)
      return dataConclusao ?? '';

    const dia = dataConclusao.substring(0, 2);
    const mes = dataConclusao.substring(2, 4);
    const ano = dataConclusao.substring(4, 8);

    return `${dia}/${mes}/${ano}`;
  }
}
