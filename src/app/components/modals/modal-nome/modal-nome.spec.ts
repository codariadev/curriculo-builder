import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNome } from './modal-nome';

describe('ModalNome', () => {
  let component: ModalNome;
  let fixture: ComponentFixture<ModalNome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalNome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
