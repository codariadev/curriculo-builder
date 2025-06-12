import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalWrapperComponent } from './components/modal-wrapper/modal-wrapper';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, ModalWrapperComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  protected title = 'curriculo-builder';
}
