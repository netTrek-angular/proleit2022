import {Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: 'button[proleitDangerBtn]'
})
export class DangerBtnDirective {

  @Input()
  proleitDangerBtn: string = '';

  @Output()
  confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostBinding('style.backgroundColor')
  private readonly backgroundColor = 'red';

  @HostBinding('style.fontWeight')
  private readonly fontWeight = 'bolder';

  constructor( private readonly elem: ElementRef ) {
    // console.log( this, elem )
  }

  @HostListener('click')
  btnClicked() {
    this.confirmed.emit(
      confirm( this.proleitDangerBtn === '' ? 'bist du sicher?' : this.proleitDangerBtn )
    );
  }

}
