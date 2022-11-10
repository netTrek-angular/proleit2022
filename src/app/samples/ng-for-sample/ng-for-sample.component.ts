import { Component, OnInit } from '@angular/core';
import {User} from "../../user/user";

@Component({
  selector: 'proleit-ng-for-sample',
  templateUrl: './ng-for-sample.component.html',
  styleUrls: ['./ng-for-sample.component.scss']
})
export class NgForSampleComponent {

  userList: User[] = [
    { name: 'Peter', birthday: new Date()},
    { name: 'Frank'},
  ];


  constructor() {

  }

}
