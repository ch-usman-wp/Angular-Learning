import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaymentSetupComponent } from '../payment-setup/payment-setup.component';
import { ProductComponent } from '../../product/product.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-business-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    PaymentSetupComponent,
    ProductComponent,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.scss']
})
export class BusinessDetailsComponent implements OnInit {
  isLinear = false;
  secondFormGroup!: FormGroup;
   
  @ViewChild(PaymentSetupComponent) paymentSetupComponent!: PaymentSetupComponent;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  get frmStepOne() {
    return this.paymentSetupComponent ? this.paymentSetupComponent.frmStepOne : null;
  }
} 
