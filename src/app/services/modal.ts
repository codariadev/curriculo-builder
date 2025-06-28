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
  id: string;
  tipo: string;
  formacao: string;
  instituicao: string;
  estado: string;
  conclusao: string;
  concluido: boolean;
}

export interface Inicio {
  nome: string;
  nascimento: number | null;
  contatoCel: string;
  contatoEmail: string;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  currentStep: number = 0;

  inicio: Inicio = {
    nome: '',
    nascimento: null,
    contatoCel: '',
    contatoEmail: '',
  };

  experiencias: Experiencia[] = [];
  skills: string[] = [];
  educacao: Educacao[] = [];
  idiomas: string[] = [];

  idade(): number | null {
    if (!this.inicio.nascimento) return null;

    const nascimentoStr = this.inicio.nascimento.toString().padStart(8, '0');

    const dia = parseInt(nascimentoStr.substring(0, 2), 10);
    const mes = parseInt(nascimentoStr.substring(2, 4), 10) - 1;
    const ano = parseInt(nascimentoStr.substring(4, 8), 10);

    const nascimento = new Date(ano, mes, dia);
    const hoje = new Date();

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();

    if (mesAtual < mes || (mesAtual === mes && diaAtual < dia)) {
      idade--;
    }

    return idade;
  }

  avancarEtapa() {
    this.currentStep++;
  }

  voltarEtapa() {
    if (this.currentStep > 0) this.currentStep--;
  }

  resetar() {
    this.currentStep = 0;
    this.inicio = {
      nome: '',
      nascimento: null,
      contatoCel: '',
      contatoEmail: '',
    };
    this.experiencias = [];
    this.skills = [];
    this.educacao = [];
    this.idiomas = [];
  }

  // Caso queira usar dados de teste, pode descomentar este método
  /*
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
        id: '1',
        tipo: 'graduacao',
        formacao: 'Análise e Desenvolvimento de Sistemas',
        instituicao: 'Fatec São Paulo',
        estado: 'SP',
        conclusao: '2023',
        concluido: false
      },
      {
        id: '2',
        tipo: 'medio',
        formacao: 'ensino-medio-completo',
        instituicao: 'ETEC',
        estado: 'SP',
        conclusao: '2019',
        concluido: true
      }
    ];

    this.idiomas = ['Português', 'Inglês', 'Espanhol'];
  }
  */
}
