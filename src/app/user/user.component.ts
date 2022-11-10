import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {UserListComponent} from "./user-list/user-list.component";

@Component({
  selector: 'proleit-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, AfterViewInit {

  @ViewChild( UserListComponent )
  userList?: UserListComponent

  ngAfterViewInit(): void {
    console.warn('UserComp - view init', this.userList)
  }

  ngOnInit(): void {
    console.warn('UserComp - init')
  }
}
