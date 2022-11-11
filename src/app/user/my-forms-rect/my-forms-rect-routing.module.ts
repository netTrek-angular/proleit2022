import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFormsRectComponent } from './my-forms-rect.component';

const routes: Routes = [{ path: '', component: MyFormsRectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFormsRectRoutingModule { }
