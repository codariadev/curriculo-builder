import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEducacao } from './modal-educacao';

describe('ModalEducacao', () => {
  let component: ModalEducacao;
  let fixture: ComponentFixture<ModalEducacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEducacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEducacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
