import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExperienciasComponent } from './modal-experiencias';

describe('ModalExperiencias', () => {
  let component: ModalExperienciasComponent;
  let fixture: ComponentFixture<ModalExperienciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalExperienciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExperienciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
