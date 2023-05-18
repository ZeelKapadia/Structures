import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsValidationTemplateDrivenComponent } from './forms-validation-template-driven.component';

describe('FormsValidationTemplateDrivenComponent', () => {
  let component: FormsValidationTemplateDrivenComponent;
  let fixture: ComponentFixture<FormsValidationTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsValidationTemplateDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsValidationTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
