import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {delay, Observable, of} from 'rxjs';
import {User} from "./user";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class UserDetailsResolver
  implements Resolve<User> {

  constructor( private readonly user: UserService ) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot):
            Observable<User> {
    const id = Number ( route.paramMap.get('usrId') );
    return this.user.getUser( id );
  }

}
