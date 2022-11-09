import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'proleit-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss']
})
export class BindingsComponent {
  name = 'saban';
  prefix = '***';
  imgUrl = 'http://placekitten.com/g/300/300';
  imgFile = 'cat.jpeg';

  size = 100;

  constructor() { }

  getName(prefix: string = '') {
    console.log('getName')
    return prefix + this.name;
  }

  incrementSize () {
    this.size += 50;
  }

  chgName() {
    this.name = 'peter';
    this.imgFile = this.imgFile === 'cat.jpeg' ? 'cat2.jpeg' : 'cat.jpeg';
    this.incrementSize();
  }
}
