import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'proleit-ng-if-sample',
  templateUrl: './ng-if-sample.component.html',
  styleUrls: ['./ng-if-sample.component.scss']
})
export class NgIfSampleComponent {

  showImage = true;
  name?: string = 'saban';
  interval = interval(500);
  imgUrl = 'http://placekitten.com/g/30/30';

  constructor() { }


}
