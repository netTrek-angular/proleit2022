import { Injectable } from '@angular/core';
import {User} from "./user";
import {BehaviorSubject, map, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: User[] = [];

  selectedUsr$: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>( undefined );
  constructor( private readonly http: HttpClient ) {
    this.init();
  }
  setSelectedUser(usr: User) {
    const crrUsr = this.selectedUsr$.value;
    this.selectedUsr$.next( usr === crrUsr ? undefined : usr );
  }
  delLastItem (){
    this.userList.pop();
  }
  getUsers () {
    return this.http.get<User[]>( environment.api )
      .pipe(
        map ( userList => userList.map( user => ({...user, birthday: new Date (user.birthday as any)})) ),
        tap ( userlist => this.userList = userlist ),
      );
  }
  private init() {
    this.update();
  }

  private update() {
    console.log('update')
    this.getUsers().subscribe();
    // this.http.get<User[]>( environment.api )
    //   .pipe(        tap ( console.log )      )
    //   .subscribe(        {
    //       next: value => this.userList = value
    //     }      );
  }
}
