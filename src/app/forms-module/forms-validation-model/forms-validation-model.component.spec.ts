import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsValidationModelComponent } from './forms-validation-model.component';

describe('FormsValidationModelComponent', () => {
  let component: FormsValidationModelComponent;
  let fixture: ComponentFixture<FormsValidationModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsValidationModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsValidationModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
