import { Component, OnInit } from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'proleit-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: User[] = [
    { name: 'Peter', birthday: new Date()},
    { name: 'Frank'},
  ];

  selectedUsr?: User;

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedUser(usr: User) {
    this.selectedUsr =
      this.selectedUsr === usr ? undefined : usr;
  }
}
