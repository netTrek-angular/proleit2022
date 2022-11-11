import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'proleit-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {

  percent = 0;

  private intervalID?: number;

  constructor(
    private readonly router: Router,
    private readonly active: ActivatedRoute,
  ) { }
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
  back() {
    this.router.navigate(['..'], {
      relativeTo: this.active
    })
  }
}
