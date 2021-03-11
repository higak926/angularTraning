import {
  Component, OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, VERSION, ViewChildren, Query, QueryList
} from '@angular/core';
import { transition, trigger, state, style, animate } from '@angular/core/src/animation/dsl';
import { Title } from '@angular/platform-browser';

import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { validateConfig } from '@angular/router/src/config';
import { Book } from './book';
import { ChildComponent } from './child.component';

@Component({
  selector: 'my-app',
  // template: `
  // <div>
  // <span *ngFor='let b of books'>
  // [<a href='#' (click)='onclick(b)'>{{b.title}}</a>]
  // </span>
  // </div>
  // <hr />
  // <detail-book [item]='selected'></detail-book>
  // `,
  // template: `
  // <div>
  // <span *ngFor='let b of books'>
  // [<a href='#' (click)='onclick(b)'>{{b.title}}</a>]
  // </span>
  // </div>
  // <hr />
  // <p>編集中の書籍：{{edit.item?.title}}</p>
  // <edit-book #edit [item]='selected' (edited)='onedited($event)'>
  // </edit-book>
  // `,
  // template: `
  // <div>
  // <label>表示/非表示
  // <input type='checkbox' (change)='onchange()' chaecked />
  // </label>
  // <div>

  // <my-child [time]='current' *ngIf='show'></my-child>
  // `,
  // template: `
  // <my-child [index]='1'></my-child>
  // <my-child [index]='2'></my-child>
  // <my-child [index]='3'></my-child>
  // <hr />
  // 完成：{{poems[0]}} {{poems[1]}} {{poems[2]}} 
  // `,
  // template: `
  // <my-content>権兵衛</my-content>
  // `,
  // template: `
  // <my-content>
  // <span class='header'>あなたもWINGSプロジェクト...</span>
  // <span class='attention'>ただいまメンバー募集中！</span>
  // <small>連絡先：webmaster@wings.msn.to</small>
  // <p>興味のある方は、WINGSプロジェクト採用担当まで...</p>
  // <small>（担当：山田）</small>
  // </my-content>
  // `,
  // template: `
  // <my-parent>
  // <my-child></my-child>
  // </my-parent>
  // `,
  // animations: [
  //   trigger('btnState', [
  //     state('off', style({
  //       border: 'none',
  //       backgroundColor: '#000',
  //       color: '#fff',
  //       fontWeight: 'nomal',
  //       transform: 'scale(0.8) rotate(0deg)'
  //     })),
  //     state('on', style({
  //       border: 'solid 1px #fff',
  //       backgroundColor: '#f00',
  //       color: '#fff',
  //       fontWeight: 'nomal',
  //       transform: 'scale(1) rotate(5deg)'
  //     })),
  //     transition('off => on', animate('200ms linear')),
  //     transition('on => off', animate('200ms linear'))
  //   ])
  // ],
  // template: `
  // <input type='button' [value]='caption' [@btnState]='flag' (click)='toggle' />
  // `,
  // styles: [`
  // input{ width: 100px; height: 50px;}
  // `]
  // styles: [`
  // h2 {
  //   font-size: 150%;
  //   text-decoration: underline;
  //   color: #369;
  // }

  // p {
  //   background-color: Yellow;
  //   color: Red;
  // }
  // `]
  // styleUrls: [ './app.component.css' ]
  // styles: [`
  // :host {
  //   display: block;
  //   border: 1px double Red;
  //   background-color: Yellow;
  // }
  // `]
  // styles: [`
  // :host-context(.summer-theme) p{
  //   background-color: #0ff;
  //   color: #f00;
  //   font-weight: bold;
  // }
  // `]
  // styles: [`
  // :host >>> p {
  //   background-color: yellow;
  //   color: red;  
  // }
  // `]
  // templateUrl: './app.component.html',
  template: `
  <h3>こんにちは、Angular！</h3>
  `,
  host: {
    '(click)': 'onclick($event)',
    'role': 'banner',
    '[class.disable]': 'true',
  }
  // template: `
  // <p>Hello</p>
  // `,
})
export class AppComponent {
  //  implements AfterViewChecked {
  // OnChanges, OnInit, DoCheck, AfterContentInit,
  // AfterContentChecked, AfterViewChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // selected: Book;
  // books = [
  //   {
  //     isbn: '978-4-7741-8411-1',
  //     title: '改訂新版JavaScript本格入門',
  //     price: 2980,
  //     publisher: '技術評論社',
  //   },
  //   {
  //     isbn: '978-4-7980-4853-6',
  //     title: 'はじめてのAndroidアプリ開発 第2版',
  //     price: 3200,
  //     publisher: '秀和システム',
  //   },
  //   {
  //     isbn: '978-4-7741-8030-4',
  //     title: '[改訂新版]Javaポケットリファレンス',
  //     price: 2680,
  //     publisher: '技術評論社',
  //   },
  //   {
  //     isbn: '978-4-7981-3547-2',
  //     title: '独習PHP 第3版',
  //     price: 3200,
  //     publisher: '翔泳社',
  //   },
  //   {
  //     isbn: '978-4-8222-9893-7',
  //     title: '基礎からしっかり学ぶC++の教科書',
  //     price: 2800,
  //     publisher: '日経BP社',
  //   },
  // ]

  // onclick(book: Book) {
  //   this.selected = {
  //     isbn: book.isbn,
  //     title: book.title,
  //     price: book.price,
  //     publisher: book.publisher
  //   };
  // }

  // onedited(book: Book) {
  //   for (let item of this.books) {
  //     if (item.isbn === book.isbn) {
  //       item.title = book.title;
  //       item.price = book.price;
  //       item.publisher = book.publisher;
  //     }
  //   }
  //   this.selected = null;
  // }

  // show = true;
  // current = new Date();

  // onchange() {
  //   this.show = !this.show;
  //   this.current = new Date();
  // }

  // constructor() {
  //   console.log('constructor');
  // }

  // ngOnInit() {
  //   console.log('ngOnInit');
  // }
  // ngOnChanges() {
  //   console.log('ngOnChanges');
  // }
  // ngDoCheck() {
  //   console.log('ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked');
  // }
  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('ngOnDestroy');
  // }

  // @ViewChildren(ChildComponent) children: QueryList<ChildComponent>;

  // poems = ['', '', ''];

  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked')

  //   this.children.forEach((item, index) => {
  //     if(this.poems[index] !== item.poem) {
  //       setTimeout(() => {
  //         this.poems[index] = item.poem;
  //       }, 3000)
  //     }
  //   })
  // }

  // name = 'Angular';

  // flag = 'off';
  // caption = 'オフ';

  // toggle() {
  //   this.flag = (this.flag === 'on' ? 'off' : 'on');
  //   this.caption = (this.caption === 'オン' ? 'オフ' : 'オン')
  // }

  // books = [
  //   {
  //     isbn: '978-4-7741-8411-1',
  //     title: '改訂新版JavaScript本格入門',
  //     price: 2980,
  //     publisher: '技術評論社',
  //   },
  //   {
  //     isbn: '978-4-7980-4853-6',
  //     title: 'はじめてのAndroidアプリ開発 第2版',
  //     price: 3200,
  //     publisher: '秀和システム',
  //   },
  //   {
  //     isbn: '978-4-7741-8030-4',
  //     title: '[改訂新版]Javaポケットリファレンス',
  //     price: 2680,
  //     publisher: '技術評論社',
  //   },
  //   {
  //     isbn: '978-4-7981-3547-2',
  //     title: '独習PHP 第3版',
  //     price: 3200,
  //     publisher: '翔泳社',
  //   },
  //   {
  //     isbn: '978-4-8222-9893-7',
  //     title: '基礎からしっかり学ぶC++の教科書',
  //     price: 2800,
  //     publisher: '日経BP社',
  //   },
  // ]

  // constructor(private title: Title){}
  // ngOnInit() {
  //   this.title.setTitle('Angular Traning')
  // }

  onclick(e: any) {
    console.log(e.target);
  }
}
