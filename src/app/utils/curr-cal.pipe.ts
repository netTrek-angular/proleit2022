import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currCal',
  // pure: true
})
export class CurrCalPipe implements PipeTransform {
  // nur exeplarisch ... bitte fertig machen!
  transform(value: string | null ): string {
    if ( typeof value  === 'string' && value.match(/\$|\€/) ) {
      const isEuro = value.indexOf('€') !== -1;
      const isDoller = !isEuro;
      value = value.replace(/\$|\€/g, '').trim();
      let num = parseInt( value, 10 );
      console.log( num )
      // if ( isEuro ) num /= 1.02;
      // else num *= 1.02;
      return num + ' ' + ( isEuro ? '$' : '€');
    } else {
      throw new Error( 'use currencye pipe before')
    }

  }

}
