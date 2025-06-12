import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExperiencias } from './modal-experiencias';

describe('ModalExperiencias', () => {
  let component: ModalExperiencias;
  let fixture: ComponentFixture<ModalExperiencias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalExperiencias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExperiencias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
