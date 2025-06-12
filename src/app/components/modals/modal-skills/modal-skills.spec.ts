import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSkills } from './modal-skills';

describe('ModalSkills', () => {
  let component: ModalSkills;
  let fixture: ComponentFixture<ModalSkills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSkills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSkills);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
