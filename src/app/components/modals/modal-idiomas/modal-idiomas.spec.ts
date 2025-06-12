import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIdiomas } from './modal-idiomas';

describe('ModalIdiomas', () => {
  let component: ModalIdiomas;
  let fixture: ComponentFixture<ModalIdiomas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalIdiomas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalIdiomas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
