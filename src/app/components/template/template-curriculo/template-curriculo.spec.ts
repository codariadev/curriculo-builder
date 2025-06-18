import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCurriculo } from './template-curriculo';

describe('TemplateCurriculo', () => {
  let component: TemplateCurriculo;
  let fixture: ComponentFixture<TemplateCurriculo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateCurriculo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateCurriculo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
