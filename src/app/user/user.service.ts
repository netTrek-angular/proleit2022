import { Injectable } from '@angular/core';
import {User} from "./user";
import {BehaviorSubject, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: User[] = [];

  selectedUsr$: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>( undefined );
  constructor( private readonly http: HttpClient ) {
    console.log( http )
    this.init();
  }

  setSelectedUser(usr: User) {
    const crrUsr = this.selectedUsr$.value;
    this.selectedUsr$.next( usr === crrUsr ? undefined : usr );
  }

  delLastItem (){
    this.userList.pop();
  }

  private init() {
    this.update();
  }

  private update() {
    console.log('update')
    this.http.get<User[]>( environment.api )
      .pipe(
        tap ( console.log )
      )
      .subscribe(
        {
          next: value => this.userList = value
        }
      );
  }
}
