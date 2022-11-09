import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingsComponent } from './bindings/bindings.component';



@NgModule({
  declarations: [
    BindingsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BindingsComponent
  ]
})
export class SamplesModule { }
