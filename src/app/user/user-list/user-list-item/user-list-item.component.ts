import {Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {User} from "../../user";

@Component({
  selector: 'proleit-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],

})
export class UserListItemComponent implements OnChanges {
  get isSelected(): boolean {
    return this._isSelected;
  }

  @HostBinding('class.is-selected')
  @Input()
  set isSelected(value: boolean) {
    this._isSelected = value;
    // console.log('selection changed')
  }

  @Input()
  user?: User;


  private _isSelected = false;

  @Output()
  selectUsr: EventEmitter<User> = new EventEmitter<User>()

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
   // if ( 'isSelected' in changes ) {
   // if ( (changes as any).isSelected ) {
   if ( changes.hasOwnProperty( 'isSelected') ) {
     const selected = changes['isSelected'];
     // console.log( selected.firstChange, selected.currentValue );
   }
  }

  @HostListener ('click')
  clickHandler () {
    this.selectUsr.emit( this.user );
  }

}
