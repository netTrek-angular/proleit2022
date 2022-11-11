import { Component } from '@angular/core';
import {UserService} from "./user/user.service";

const hallo = 'welt'

@Component({
  selector: 'proleit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proleit2022';
  constructor( private readonly user: UserService ) {
    user.selectedUsr$.subscribe( console.warn );
  }
}

