import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-payment-setup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './payment-setup.component.html',
  styleUrls: ['./payment-setup.component.scss']
})
export class PaymentSetupComponent implements OnInit {
  frmStepOne!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.frmStepOne = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }
}
