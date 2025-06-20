import { Injectable } from '@angular/core';

export interface Experiencia {
  empresa: string;
  cargo: string;
  descricao: string;
  dataInicio: string;
  dataFim: string;
  atual: boolean;
}

export interface Educacao {
  tipo: string;
  formacao: string;
  instituicao: string;
  estado: string;
  conclusao: string;
  concluido: boolean;
}

export interface Inicio {
  nome: string;
  nascimento: string;
  contatoCel: number;
  contatoEmail: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  currentStep: number = 3;
  inicio: Inicio = {
    nome: '',
    nascimento: '',
    contatoCel: 0,
    contatoEmail: ''
  };
  experiencias: Experiencia[] = [];
  skills: string[] = [];
  educacao: Educacao[] = [];
  idiomas: string[] = [];

  constructor() {
    this.carregarDadosTeste(); // carregar os dados automaticamente
  }


  idade(): number | null {
    if (!this.inicio.nascimento) return null;

    const ano = parseInt(this.inicio.nascimento.split('-')[0], 10);
    const anoAtual = new Date().getFullYear();
    return anoAtual - ano;
  }


  avancarEtapa() {
    this.currentStep++;
  }

  voltarEtapa() {
    if (this.currentStep > 0) this.currentStep--;
  }

  resetar() {
    this.currentStep = 0;
    this.inicio = { nome: '', nascimento: '', contatoCel: 0, contatoEmail: '' };
    this.experiencias = [];
    this.skills = [];
    this.educacao = [];
    this.idiomas = [];
  }

  carregarDadosTeste() {
    this.inicio = {
      nome: 'Lucas Eduardo',
      nascimento: '1995-06-10',
      contatoCel: 11999999999,
      contatoEmail: 'lucas@email.com'
    };

    this.experiencias = [
      {
        empresa: 'Tech Solutions',
        cargo: 'Desenvolvedor Front-End',
        descricao: 'Desenvolvimento de interfaces com Angular e integração com APIs.',
        dataInicio: '2022-01-10',
        dataFim: '2023-06-15',
        atual: false
      },
      {
        empresa: 'CodeWorks',
        cargo: 'Estagiário em Desenvolvimento',
        descricao: 'Auxílio em projetos web e manutenção de sistemas internos.',
        dataInicio: '2021-02-01',
        dataFim: '2021-12-20',
        atual: false
      }
    ];

    this.skills = [
      'Angular',
      'TypeScript',
      'Firebase',
      'Tailwind CSS',
      'Git'
    ];

    this.educacao = [
      {
        tipo: 'Graduação',
        formacao: 'Análise e Desenvolvimento de Sistemas',
        instituicao: 'Fatec São Paulo',
        estado: 'SP',
        conclusao: '2023',
        concluido: false
      },
      {
        tipo: 'Curso Técnico',
        formacao: 'Informática para Internet',
        instituicao: 'ETEC',
        estado: 'SP',
        conclusao: '2019',
        concluido: true
      }
    ];

    this.idiomas = ['Português', 'Inglês', 'Espanhol'];
  }
}
