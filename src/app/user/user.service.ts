import { Injectable } from '@angular/core';
import {User} from "./user";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: User[] = [
    { name: 'Peter', birthday: new Date()},
    { name: 'Frank'},
  ];

  selectedUsr$: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>( undefined );
  constructor() {
  }

  setSelectedUser(usr: User) {
    const crrUsr = this.selectedUsr$.value;
    this.selectedUsr$.next( usr === crrUsr ? undefined : usr );
  }

  delLastItem (){
    this.userList.pop();
  }
}
