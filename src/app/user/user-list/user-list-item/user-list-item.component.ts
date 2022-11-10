import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {User} from "../../user";

@Component({
  selector: 'proleit-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent {

  @Input()
  user?: User;

  @Output()
  selectUsr: EventEmitter<User> = new EventEmitter<User>()
  constructor() { }

  @HostListener ('click')
  clickHandler () {
    this.selectUsr.emit( this.user );
  }

}
