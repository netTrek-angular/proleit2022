import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'proleit-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss']
})
export class BindingsComponent implements OnInit {
  name = 'saban';
  prefix = '***';
  imgUrl = 'http://placekitten.com/g/300/300';
  imgFile = 'cat.jpeg';

  size = 100;
  htmlSnippet = `<ul><li>1</li></ul><script>alert("hacked")</script>`;
  color = 'red';

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
    this.imgUrl = 'http://placekitten.com/g/200/200';
    this.color = this.color === 'red' ? 'green' : 'red';
  }

  ngOnInit(): void {
    const intervalID = setInterval ( () => {
      this.size += 10;
      if ( this.size > 150 ) {
        // console.log( intervalID )
        clearInterval( intervalID );
      }
    }, 100);
  }
}
