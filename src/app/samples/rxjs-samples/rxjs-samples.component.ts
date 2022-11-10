import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, find, fromEvent, map, Observable, of, Subject, Subscription, tap} from "rxjs";

@Component({
  selector: 'proleit-rxjs-samples',
  templateUrl: './rxjs-samples.component.html',
  styleUrls: ['./rxjs-samples.component.scss']
})
export class RxjsSamplesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.initOfSample ();
    // this.initFromEvent ();
    //this.initSubjectSample ();
    this.initBehaviorSubjecte()
  }

  private initBehaviorSubjecte() {
    const observable$ = new BehaviorSubject( 0 );
    this.subscribe(observable$, 'reg 1');
    this.subscribe(observable$, 'reg 2');
    this.subscribe(observable$, 'reg 3');
    observable$.next( 1 );
    this.subscribe(observable$, 'reg 4');
  }

  private initSubjectSample() {
    const observable$ = new Subject();
    observable$.next( 1 );
    this.subscribe(observable$, 'reg 1');
    observable$.next( 2 );
    const reg2 = this.subscribe(observable$, 'reg 2');
    observable$.next( 3 );
    this.subscribe(observable$, 'reg 3');
    observable$.next( 4 );
    reg2.unsubscribe();
    observable$.next( 5 );
  }

  private initFromEvent() {
    const observable$ = fromEvent<MouseEvent>( document, 'mousemove' )
      .pipe(
        map ( event => event.clientY ),
        find ( y =>y <= 0 ),
        tap ({
          complete: () => alert ( 'du willst doch nicht gehen :(')
        })
      );
    const subscription = this.subscribe(observable$, 'ofSample');
  }

  private initOfSample() {

    const observable$ = of ( 1,2,3 );
    const subscription = this.subscribe(observable$, 'ofSample');

  }

  private subscribe<T> ( observable$: Observable<T>, prefix: string = '' ): Subscription {
    return observable$.subscribe( {
      next: ( crrVal => console.log( prefix, crrVal) ),
      error: ( error => console.error( prefix, error ) ),
      complete: () => console.log ( prefix, 'ich habe fertig!')
    })
  }

}
