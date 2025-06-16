import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPrint } from './modal-print';

describe('ModalPrint', () => {
  let component: ModalPrint;
  let fixture: ComponentFixture<ModalPrint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPrint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPrint);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
