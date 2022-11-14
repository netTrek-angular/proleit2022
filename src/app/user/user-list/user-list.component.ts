import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'proleit-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(public readonly user: UserService ) {
  }

  ngOnInit(): void {
    // to play
    this.user.getUsersByName( 'Frank' ).subscribe( console.warn )
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

  updateSelectedUser() {
    let userWithNewBD = this.user.selectedUsr$.value;
    if ( userWithNewBD ) {
      userWithNewBD = {...userWithNewBD, birthday: new Date()}
      // userWithNewBD.birthday = new Date(); - kann ggf. gefährlich sein weil referenz zu BehaviourSub
      this.user.updateUsr(userWithNewBD).subscribe();
    }
  }

  createNewUser (newUsr: User = {name: 'john doe ' + Date.now() }) {
    this.user.createUsr(newUsr).subscribe();
  }
}
