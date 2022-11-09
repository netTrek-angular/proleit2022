import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'proleit-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {

  percent = 0;

  private intervalID?: number;

  constructor() { }

  ngOnInit(): void {
    this.startTimer ();
  }


  ngOnDestroy(): void {
    this.resetTimer();
  }

  private startTimer() {
    if ( this.intervalID !== undefined ) {
      this.resetTimer();
    }
    this.intervalID = window.setInterval (
      () => this.increment( 10 ),
      100 );
  }

  private resetTimer() {
    this.percent = 0;
    this.stopTimer ();
    this.intervalID = undefined;
  }

  private stopTimer() {
    clearInterval( this.intervalID );
  }

  @HostListener ('click')
  private togglePause () {
    if ( this.percent === 100 ) {
      this.resetTimer();
      this.startTimer();
    } else if ( this.intervalID ) {
      this.stopTimer();
      this.intervalID = undefined;
    } else {
      this.startTimer();
    }
  }

  private increment(step: number = 20 )  {
    let next = this.percent + step;
    this.percent = Math.min( next, 100 );
    if ( this.percent === 100 ) {
      this.stopTimer();
    }
  }

}
