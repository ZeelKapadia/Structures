import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-validation-model',
  templateUrl: './forms-validation-model.component.html',
  styleUrls: ['./forms-validation-model.component.css']
})
export class FormsValidationModelComponent implements OnInit {
  formData: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.formData.name) {
      console.log(this.formData);
    }
  }

}
