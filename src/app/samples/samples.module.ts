import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingsComponent } from './bindings/bindings.component';
import { ContentSampleComponent } from './content-sample/content-sample.component';



@NgModule({
  declarations: [
    BindingsComponent,
    ContentSampleComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        BindingsComponent,
        ContentSampleComponent
    ]
})
export class SamplesModule { }
