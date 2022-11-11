import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFormsRectRoutingModule } from './my-forms-rect-routing.module';
import { MyFormsRectComponent } from './my-forms-rect.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MyFormsRectComponent
  ],
    imports: [
        CommonModule,
        MyFormsRectRoutingModule,
        ReactiveFormsModule
    ]
})
export class MyFormsRectModule { }
