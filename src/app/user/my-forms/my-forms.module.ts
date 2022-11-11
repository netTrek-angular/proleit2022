import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFormsRoutingModule } from './my-forms-routing.module';
import { MyFormsComponent } from './my-forms.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MyFormsComponent
  ],
    imports: [
        CommonModule,
        MyFormsRoutingModule,
        FormsModule
    ]
})
export class MyFormsModule { }
