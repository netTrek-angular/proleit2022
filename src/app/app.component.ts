import { Component } from '@angular/core';
import {UserService} from "./user/user.service";
import {AppLoadingService} from "./app-loading.service";
import {Event, NavigationEnd, Router} from "@angular/router";
import {filter, map} from "rxjs";

const hallo = 'welt'

@Component({
  selector: 'proleit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proleit2022';
  constructor(
    private readonly user: UserService,
    public readonly loading: AppLoadingService,
    readonly router: Router
  ) {
    /*
    router.events.
    pipe(
      filter ( event => event instanceof NavigationEnd ),
      map ( event => (event as NavigationEnd).url )
    ).subscribe( console.warn )

    user.selectedUsr$.
    subscribe( console.warn );

    */
  }
}

