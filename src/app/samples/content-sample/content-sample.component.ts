import {AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList} from '@angular/core';
import {UserComponent} from "../../user/user.component";

@Component({
  selector: 'proleit-content-sample',
  templateUrl: './content-sample.component.html',
  styleUrls: ['./content-sample.component.scss']
})
export class ContentSampleComponent implements OnInit, AfterContentInit {

  // falls mich das HTML Elment und nciht die Klasse intereessiert
  // @ContentChild( UserComponent, { static: true, read: ElementRef } )
  // static true nur wenn nciht Bindunungsabh. dann ist user auch schon im init erreichbar sonst nur im afterInit
  @ContentChild( UserComponent, { static: true } )
  user?: UserComponent;

  @ContentChildren( UserComponent )
  users?: QueryList<UserComponent>;

  @ContentChild( 'info', { static: true } )
  info?: ElementRef<HTMLSpanElement>



  constructor() { }

  ngAfterContentInit(): void {
    // console.warn('ContentSampleComponent - content init', this.user, this.info, this.users )
    // console.log(this.users?.toArray());
  }

  ngOnInit(): void {
    // console.warn('ContentSampleComponent - init', this.user, this.info)
    if ( this.info ) {
      this.info.nativeElement.innerText = 'Hello world'
    }

  }

}
