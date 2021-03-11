import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, VERSION, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'my-child',
  // template: `<div>現在時刻は{{time.toLocaleString()}}</div>`,
  // template: `
  // <div>
  // 三行詩{{index}}：<input name='poem' [(ngModel)]='poem' size='20' />
  // </div>
  // `,
  // template: `
  // <div>
  // 一行詩：<input name='poem1' [(ngModel)]='poem' size='20' />
  // </div>
  // `,
  template: `
  <p>今日も一日頑張りましょう！</p>
  `,
})
export class ChildComponent{
// implements OnChanges, OnInit, DoCheck, AfterContentInit,
// AfterContentChecked, AfterViewChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // @Input() time: Date;

  // constructor() {
  //   console.log('[child]constructor');
  // }

  // ngOnInit() {
  //   console.log('[child]ngOnInit');
  // }
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('[child]ngOnChanges');

  //   for (let prop in changes) {
  //     let change = changes[prop];
  //     console.log(`${prop}：${change.previousValue} => ${change.currentValue}`);
  //   }
  // }
  // ngDoCheck() {
  //   console.log('[child]ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('[child]ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('[child]ngAfterContentChecked');
  // }
  // ngAfterViewInit() {
  //   console.log('[child]ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('[child]ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('[child]ngOnDestroy');
  // }

  // @Input() index: number;
  poem: string;
}
