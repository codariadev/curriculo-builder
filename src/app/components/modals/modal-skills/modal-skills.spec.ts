import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSkillsComponent } from './modal-skills';

describe('ModalSkills', () => {
  let component: ModalSkillsComponent;
  let fixture: ComponentFixture<ModalSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
