import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingsComponent } from './bindings/bindings.component';
import { ContentSampleComponent } from './content-sample/content-sample.component';
import { NgIfSampleComponent } from './ng-if-sample/ng-if-sample.component';
import { NgForSampleComponent } from './ng-for-sample/ng-for-sample.component';
import { PipeSampleComponent } from './pipe-sample/pipe-sample.component';
import {UtilsModule} from "../utils/utils.module";
import { RxjsSamplesComponent } from './rxjs-samples/rxjs-samples.component';
import { SamplesComponent } from './samples/samples.component';
import {RouterModule, RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    BindingsComponent,
    ContentSampleComponent,
    NgIfSampleComponent,
    NgForSampleComponent,
    PipeSampleComponent,
    RxjsSamplesComponent,
    SamplesComponent
  ],
  imports: [
    CommonModule,
    UtilsModule,
    RouterModule
  ],
    exports: [
        BindingsComponent,
        ContentSampleComponent,
        NgIfSampleComponent,
        NgForSampleComponent,
        PipeSampleComponent,
        RxjsSamplesComponent,
        SamplesComponent
    ]
})
export class SamplesModule { }
