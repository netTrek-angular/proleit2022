import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {CountdownComponent} from "./utils/countdown/countdown.component";
import {SamplesComponent} from "./samples/samples/samples.component";
import {RxjsSamplesComponent} from "./samples/rxjs-samples/rxjs-samples.component";
import {BindingsComponent} from "./samples/bindings/bindings.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user'},
  { path: 'user', component: UserComponent },
  // { path: 'countdown', component: CountdownComponent },
  { path: 'samples', component: SamplesComponent, children: [
        // {path: '', pathMatch: 'full', redirectTo: 'countdown'},
        {path: 'countdown', component: CountdownComponent},
        {path: 'rxjs', component: RxjsSamplesComponent},
        {path: 'bindings', component: BindingsComponent},
    ] },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: '**', redirectTo: 'user' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
