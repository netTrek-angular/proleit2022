import { Injectable } from '@angular/core';
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: User[] = [
    { name: 'Peter', birthday: new Date()},
    { name: 'Frank'},
  ];

  selectedUsr?: User;
  constructor() { }

  setSelectedUser(usr: User) {
    this.selectedUsr =
      this.selectedUsr === usr ? undefined : usr;
  }

  delLastItem (){
    this.userList.pop();
  }
}
