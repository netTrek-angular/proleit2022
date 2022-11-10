import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'proleit-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, AfterViewInit{
    ngAfterViewInit(): void {
      console.warn('UserComp - view init')
    }
    ngOnInit(): void {
      console.warn('UserComp - init')
    }
}
