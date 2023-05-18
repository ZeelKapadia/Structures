import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-validation-template-driven',
  templateUrl: './forms-validation-template-driven.component.html',
  styleUrls: ['./forms-validation-template-driven.component.css']
})
export class FormsValidationTemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(form: any) {
    if (form.valid) {
      console.log(form.value);
    }
  }

}
