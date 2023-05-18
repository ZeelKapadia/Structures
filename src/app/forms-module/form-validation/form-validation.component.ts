import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
  basicForm: FormGroup
  isUpdate = false;
  typePass = "password";
  basicDetails = {
    name: "jhon",
    email: "tugrp@example.com",
    password: "jhon123",
    confPass: "jhon123",
    mobileNo: "1234567890"
  }

  emailmessage = "";
  mobileMessage = "";
  passwordMessage = "";
  confpassMessage = ""

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initBasicForm();
  }

  initBasicForm() {
    if (!this.basicForm) {
      this.basicForm = this.formBuilder.group({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        confPass: new FormControl('', [Validators.required]),
        mobileNo: new FormControl('', [Validators.required]),
      })
    }
    else if (this.isUpdate) {
      this.basicForm.patchValue({
        name: this.basicDetails.name,
        email: this.basicDetails.email,
        password: this.basicDetails.password,
        confPass: this.basicDetails.confPass,
        mobileNo: this.basicDetails.mobileNo,
      })
    } else {
      this.basicForm.setValue({
        name: "",
        email: "",
        password: "",
        confPass: "",
        mobileNo: "",
      })
    }
  }

  resetBasicForm() {
    this.isUpdate = false;
    this.initBasicForm()
  }

  onUpdate() {
    this.isUpdate = true;
    this.initBasicForm();
  }

  onSubmit() {
    if (this.basicForm.valid) {
      if (this.isMatched()) {
        if (this.regExpPass()) {
          if (this.mobileValidation) {
            console.log(this.basicForm.value);
          } else {
            this.mobileMessage = "Mobile number is invalid"
          }
        } else {
          this.passwordMessage = "Password should be contain atleast One capital,one Lower,one Degit and one special charcter as well as 8-10 characters long"
        }
      }
      else {
        this.confpassMessage = "Password and confirm passowrd fields are not matched"
      }
    }
    else {
    }
  }

  isMatched() {
    return this.basicForm.controls['password'].value === this.basicForm.controls['confPass'].value;
  }

  regExpPass() {
    let regExpPass = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,10})"
    const strPassword = "" + this.basicForm.controls['password'].value
    return strPassword.match(regExpPass);
  }

  generateRandomPassword() {
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = lower.toUpperCase();
    let numeric = "0123456789";
    let specialChar = "`!@#$%^&*()_+=-{[}]:;<>,./?|\"\'"

    let passwordString = lower + upper + numeric + specialChar;
    let i = 0
    let generatedPassword = "";
    while (i <= 10) {
      generatedPassword = passwordString.charAt(Math.floor(Math.random() * passwordString.length));
      i++
    }
    console.log(generatedPassword);
  }

  get basicFormControls() {
    return this.basicForm.controls;
  }

  mobileValidation() {
    let mobile = this.basicForm.controls['mobileNo'].value;
    let regExp = "(?=.*[0-9])(?=.{8,10})"
    return mobile.match(regExp);
  }

  revealPassword() {
    this.typePass = "text" ? 'password' : 'text';
  }
}
