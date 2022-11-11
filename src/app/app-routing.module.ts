import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {CountdownComponent} from "./utils/countdown/countdown.component";
import {SamplesComponent} from "./samples/samples/samples.component";
import {RxjsSamplesComponent} from "./samples/rxjs-samples/rxjs-samples.component";
import {BindingsComponent} from "./samples/bindings/bindings.component";
import {UserDetailsComponent} from "./user/user-details/user-details.component";
import {UserDetailsResolver} from "./user/user-details.resolver";
import {UserGuard} from "./user/user.guard";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'user', component: UserComponent },
  { path: 'user/:usrId', component: UserDetailsComponent,
    canActivate: [ UserGuard ],
    data: {
      isAdmin: true
    },
    resolve: {
      loadedUsr: UserDetailsResolver
    }},
  // { path: 'countdown', component: CountdownComponent },
  { path: 'samples', component: SamplesComponent, children: [
        // {path: '', pathMatch: 'full', redirectTo: 'countdown'},
        {path: 'countdown', component: CountdownComponent},
        {path: 'rxjs', component: RxjsSamplesComponent},
        {path: 'bindings', component: BindingsComponent},
    ] },
  { path: 'home',
    canLoad: [ UserGuard ],
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule) },
  { path: 'myForms', loadChildren: () => import('./user/my-forms/my-forms.module').then(m => m.MyFormsModule) },
  { path: 'myFormsReac', loadChildren: () => import('./user/my-forms-rect/my-forms-rect.module').then(m => m.MyFormsRectModule) },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
