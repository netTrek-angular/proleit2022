import {Component, LOCALE_ID, OnInit, Pipe} from '@angular/core';
import {User} from "../../user/user";

@Component({
  selector: 'proleit-pipe-sample',
  templateUrl: './pipe-sample.component.html',
  styleUrls: ['./pipe-sample.component.scss'],
  providers: [
    {provide: LOCALE_ID, useValue: 'de' },
  ]
})
export class PipeSampleComponent {

  readonly user: User = {name: 'saban',
    birthday: new Date ('04-11-1973')}

  num = Math.PI;

  constructor() {
  }


}
