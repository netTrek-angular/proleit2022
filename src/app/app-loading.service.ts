import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppLoadingService extends BehaviorSubject<number>{

  constructor() {
    super ( 0 )
  }

  decrement() {
    this.next( this.value - 1 );
    // debugger
  }

  increment() {
    this.next( this.value + 1 );
    // debugger
  }
}
