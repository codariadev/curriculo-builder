import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWrapperComponent } from './modal-wrapper';

describe('ModalWrapper', () => {
  let component: ModalWrapperComponent;
  let fixture: ComponentFixture<ModalWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
