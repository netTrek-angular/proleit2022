import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingsComponent } from './bindings/bindings.component';
import { ContentSampleComponent } from './content-sample/content-sample.component';
import { NgIfSampleComponent } from './ng-if-sample/ng-if-sample.component';
import { NgForSampleComponent } from './ng-for-sample/ng-for-sample.component';



@NgModule({
  declarations: [
    BindingsComponent,
    ContentSampleComponent,
    NgIfSampleComponent,
    NgForSampleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BindingsComponent,
    ContentSampleComponent,
    NgIfSampleComponent,
    NgForSampleComponent
  ]
})
export class SamplesModule { }
