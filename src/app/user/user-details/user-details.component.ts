import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {delay, filter, map, switchMap, tap} from "rxjs";
import {UserService} from "../user.service";
import {User} from "../user";

@Component({
  selector: 'proleit-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  crrUsr?: User;

  constructor(
    private readonly activated: ActivatedRoute,
    private readonly user: UserService
  ) { }

  ngOnInit(): void {
    this.activated.paramMap.pipe(
      filter ( map => map.has( 'usrId') ),
      map ( map => Number ( map.get( 'usrId') ) ),
      filter ( id => !isNaN( id ) ),
      tap ( console.warn ),
      switchMap ( id => this.user.getUser( id ) ),
      tap ( console.warn )
    // ).subscribe( console.warn )
    ).subscribe( next => this.crrUsr = next )
  }

}
