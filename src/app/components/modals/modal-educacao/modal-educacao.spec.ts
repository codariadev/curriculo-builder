import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEducacaoComponent} from './modal-educacao';

describe('ModalEducacao', () => {
  let component: ModalEducacaoComponent;
  let fixture: ComponentFixture<ModalEducacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEducacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEducacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
