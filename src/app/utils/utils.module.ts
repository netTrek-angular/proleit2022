import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { DangerBtnDirective } from './danger-btn.directive';
import { CurrCalPipe } from './curr-cal.pipe';



@NgModule({
  declarations: [
    CountdownComponent,
    DangerBtnDirective,
    CurrCalPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CountdownComponent, DangerBtnDirective, CurrCalPipe
  ]
})
export class UtilsModule { }
