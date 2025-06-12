import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  currentStep: number = 0;
  nome: string = '';
  experiencias: string[] = [];
  skills: string[] = [];
  educacao: string[] = [];
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
