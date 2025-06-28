import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalWrapperComponent } from './components/modal-wrapper/modal-wrapper';
import { provideNgxMask } from 'ngx-mask';
import { NotificacaoService } from './components/utils/notificacao';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, ModalWrapperComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  providers: [
    provideNgxMask({ dropSpecialCharacters: true })
  ],
})

export class App {
  constructor(public notificacao: NotificacaoService){}

  protected title = 'curriculo-builder';
}
