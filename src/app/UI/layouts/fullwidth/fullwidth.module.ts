import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullwidthComponent } from './fullwidth.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../../modules/login/login.component';
import { SignupComponent } from '../../modules/signup/signup.component';
import { SharedModule } from '../../shared/shared.module';
import { ForgetPasswordComponent } from '../../modules/forget-password/forget-password.component';


@NgModule({
  declarations: [
    FullwidthComponent,
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FullwidthModule { }
