import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingsComponent } from './bindings/bindings.component';
import { ContentSampleComponent } from './content-sample/content-sample.component';
import { NgIfSampleComponent } from './ng-if-sample/ng-if-sample.component';
import { NgForSampleComponent } from './ng-for-sample/ng-for-sample.component';
import { PipeSampleComponent } from './pipe-sample/pipe-sample.component';
import {UtilsModule} from "../utils/utils.module";
import { RxjsSamplesComponent } from './rxjs-samples/rxjs-samples.component';



@NgModule({
  declarations: [
    BindingsComponent,
    ContentSampleComponent,
    NgIfSampleComponent,
    NgForSampleComponent,
    PipeSampleComponent,
    RxjsSamplesComponent
  ],
    imports: [
        CommonModule,
        UtilsModule
    ],
    exports: [
        BindingsComponent,
        ContentSampleComponent,
        NgIfSampleComponent,
        NgForSampleComponent,
        PipeSampleComponent,
        RxjsSamplesComponent
    ]
})
export class SamplesModule { }
