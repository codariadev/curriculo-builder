import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewModalComponent } from './modal-preview';

describe('ModalPreview', () => {
  let component: PreviewModalComponent;
  let fixture: ComponentFixture<PreviewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
