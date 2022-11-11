import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {CountdownComponent} from "./utils/countdown/countdown.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user'},
  { path: 'user', component: UserComponent },
  { path: 'countdown', component: CountdownComponent },
  { path: '**', redirectTo: 'user' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
