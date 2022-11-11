import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'proleit-my-forms',
  templateUrl: './my-forms.component.html',
  styleUrls: ['./my-forms.component.scss']
})
export class MyFormsComponent  {

  constructor() { }


  send(data: any) {
    console.log( data )
  }
}
