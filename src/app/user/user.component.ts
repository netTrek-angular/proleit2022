import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'proleit-user',
  templateUrl: './user.component.html',
  // template: '<h2>{{name}}</h2>',
  styleUrls: ['./user.component.scss'],
  /*styles: [
    `
      h2 {
        color: aqua;
      }
    `
  ]*/
  encapsulation: ViewEncapsulation.Emulated,
})
export class UserComponent {
  name = 'saban';
  age?: number;

  constructor() { }

  chgName() {
    this.name = 'peter';
  }
}
