import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../../services/modal';

@Component({
  selector: 'app-modal-print',
  imports: [CommonModule, FormsModule,],
  templateUrl: './modal-print.html',
  styleUrl: './modal-print.css'
})
export class ModalPrint {


   constructor(public modalService: ModalService) {}
}
