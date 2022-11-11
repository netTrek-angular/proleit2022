import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, find, fromEvent, map, Observable, of, Subject, Subscription, take, tap, timer} from "rxjs";

@Component({
  selector: 'proleit-rxjs-samples',
  templateUrl: './rxjs-samples.component.html',
  styleUrls: ['./rxjs-samples.component.scss']
})
export class RxjsSamplesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.initOfSample ();
    this.initFromEvent ();
    //this.initSubjectSample ();
    // this.initBehaviorSubjecte()
    // this.initMyObsv ();
  }
  private initMyObsv() {
    const observable$ = new Observable( subscriber => {
      let counter = 0;
      const intervalID = setInterval ( ()=> {
        subscriber.next( ++counter );
        console.log( 'inner', counter)
        if ( counter === 10 ) {
          subscriber.complete();
        }
      }, 100);
      return () => {
        clearInterval( intervalID );
      }
    })
    this.subscribe( observable$.pipe( take ( 5 )), 'outer' );
    timer( 30 ).subscribe(
      n => this.subscribe( observable$.pipe( ), 'outer2' )
    )
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
        // tap ( {next: value => console.log ( value )} ),
        map ( event => event.clientY ),
        // tap ( {next: value => console.log ( value )} ),
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
