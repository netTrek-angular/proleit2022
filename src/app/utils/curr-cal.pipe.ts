import {Inject, LOCALE_ID, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'currCal',
  // pure: true
})
export class CurrCalPipe implements PipeTransform {
  constructor( @Inject(LOCALE_ID) private readonly local: string ) {
  }
  // nur exeplarisch ... bitte fertig machen!
  transform(value: string | null ): string {
    if ( typeof value  === 'string' && value.match(/\$|\€/) ) {

      const isEuro = value.indexOf('€') !== -1;
      const isDollar = !isEuro;
      value = value.replace(/\$|\€/g, '').trim();

      if ( this.local === 'de' ) {
        value = value.replace( /\./gm,'' );
        value = value.replace( /\,/gm,'.' );
      } else {
        value = value.replace( /\,/gm,'' );
      }

      let num = parseFloat( value ) * (isEuro ? 0.98 : 1.02 );
      return ( Math.round( num * 100 ) / 100 ) + ' ' + ( isEuro ? '$' : '€');
    } else {
      throw new Error( 'use currencye pipe before')
    }

  }

}
