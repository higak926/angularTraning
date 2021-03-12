import { Component, OnInit, Optional } from '@angular/core';
import { OverService, SpecialOverService } from './over.service';
import { UseService } from './use.service';

@Component({
  selector: 'my-child',
  // providers: [
  //   { provide: OverService, useClass: SpecialOverService }
  // ],
  // template: `
  // <p>ChildComponent：{{over.show()}}</p>
  // `
  // template: `
  // <p>{{current}}</p>
  // `
  template: `<div>UseService：{{current}}</div>`
})
export class ChildComponent { 
// implements OnInit {
  // constructor(private over: OverService) {}

  // current = '';
  // constructor(@Optional()private use: UseService) {}

  // ngOnInit() {
  //   if (this.use) {
  //     this.current = this.use.show();
  //   }
  // }

  current: string;

  constructor(private use: UseService) {
    this.current = use.show();
  }
}