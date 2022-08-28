import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { HomeComponent } from '../../modules/home/home.component';
import { ContactComponent } from '../../modules/contact/contact.component';
import { SharedModule } from '../../shared/shared.module';
import { MatSliderModule } from '@angular/material/slider';
import { AddPropertyComponent } from '../../modules/add-property/add-property.component';
import { PropertydetailComponent } from '../../modules/propertydetail/propertydetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    ContactComponent,
    AddPropertyComponent, 
    PropertydetailComponent,      
  ],
  imports: [
    CommonModule,
    RouterModule,    
    SharedModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class DefaultModule { }
