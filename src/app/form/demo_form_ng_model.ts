import { Component } from '@angular/core';
import {
  FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'demo-form-ng-model',
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
  template: `
  <div class="ui container raised segment">
    <h2 class="ui header">Demo Form: with ng-model</h2>

    <div class="ui info message">
      The product name is: {{productName}}
    </div>

    <form [formGroup]="myForm"
          (ngSubmit)="onSubmit(myForm.value)"
          class="ui form">

      <div class="field">
        <label for="productNameInput">Product Name</label>
        <input type="text"
               id="productNameInput"
               placeholder="Product Name"
               [formControl]="myForm.find('productName')"
               [(ngModel)]="productName">
      </div>

      <div *ngIf="!myForm.valid"
        class="ui error message">Form is invalid</div>
      <button type="submit" class="ui button">Submit</button>
    </form>

  </div>
  `
})
export class DemoFormNgModel {
  myForm: FormGroup;
  productName: string;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'productName':  ['', Validators.required]
    });
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
