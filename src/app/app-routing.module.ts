import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {CountdownComponent} from "./utils/countdown/countdown.component";
import {SamplesComponent} from "./samples/samples/samples.component";
import {RxjsSamplesComponent} from "./samples/rxjs-samples/rxjs-samples.component";
import {BindingsComponent} from "./samples/bindings/bindings.component";
import {UserDetailsComponent} from "./user/user-details/user-details.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'user', component: UserComponent },
  { path: 'user/:usrId', component: UserDetailsComponent },
  // { path: 'countdown', component: CountdownComponent },
  { path: 'samples', component: SamplesComponent, children: [
        // {path: '', pathMatch: 'full', redirectTo: 'countdown'},
        {path: 'countdown', component: CountdownComponent},
        {path: 'rxjs', component: RxjsSamplesComponent},
        {path: 'bindings', component: BindingsComponent},
    ] },
  { path: 'home',
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule) },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
