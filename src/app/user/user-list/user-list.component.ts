import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'proleit-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  constructor(public readonly user: UserService ) {
  }

  confirmed(del: boolean) {
    if (del) {
      this.user.delSelectedUsr();
    }
  }

  setSelectedUser(usr: User) {
    this.user.getUser( usr.id! ).subscribe(
      {
        next: user => this.user.setSelectedUser (user)
        // complete: () => console.log ('fertig') // durch complete autom unsubscribe
      }
    )
  }
}
