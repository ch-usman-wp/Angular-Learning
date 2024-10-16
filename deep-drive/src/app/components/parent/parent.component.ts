import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      min: ['', Validators.required],
      max: ['', Validators.required]
    }, { validator: this.minLessThanMaxValidator });
  }

  minLessThanMaxValidator(group: AbstractControl): { [key: string]: boolean } | null {
    const min = group.get('min')?.value;
    const max = group.get('max')?.value;

    if (min !== null && max !== null && min >= max) {
      return { 'minGreaterThanMax': true };
    }
    return null;
  }

  get minValueError() {
    return this.myForm.hasError('minGreaterThanMax') && this.myForm.get('min')?.touched;
  }

  get maxValueError() {
    return this.myForm.hasError('minGreaterThanMax') && this.myForm.get('max')?.touched;
  }

  onSubmit(){}
  
 }
