import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsValidationTemplateDrivenComponent } from './forms-validation-template-driven/forms-validation-template-driven.component';
import { FormsValidationModelComponent } from './forms-validation-model/forms-validation-model.component';



@NgModule({
  declarations: [
    FormValidationComponent,
    FormsValidationTemplateDrivenComponent,
    FormsValidationModelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [FormValidationComponent, FormsValidationTemplateDrivenComponent, FormsValidationModelComponent]
})
export class FormsModules { }
