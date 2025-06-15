import { Injectable } from '@angular/core';


interface Experiencia {
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

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  currentStep: number = 0;
  nome: string = '';
  experiencias: Experiencia[] = [];
  skills: string[] = [];
  educacao: Educacao[] = [];
  idiomas: string[] = [];

  avancarEtapa() {
    this.currentStep++;
  }

  voltarEtapa() {
    if (this.currentStep > 0) this.currentStep--;
  }

  resetar() {
    this.currentStep = 0;
    this.nome = '';
    this.experiencias = [];
    this.skills = [];
    this.educacao = [];
    this.idiomas = [];
  }
}
