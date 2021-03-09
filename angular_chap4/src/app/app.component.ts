import { Component, OnDestroy, OnInit } from '@angular/core';

import { EventComponent } from './event.component'
import { BookComponent } from './book.component'
import { WingsComponent } from './wings.component'
import { timeStamp } from 'console';

@Component({
  selector: 'my-app',
  // template: `
  // <p>元の文字列：{{title}}</p>
  // <p>uppercase：{{title | uppercase}}</p>
  // <p>lowercase：{{title | lowercase}}</p>
  // <p>titlecase：{{title | titlecase}}</p>
  // `,
  // template: `<pre>{{obj | json}}</pre>`,
  // template: `<ul>
  // <li>{{str}}</li>
  // <li>{{str | slice: 3}}</li>
  // <li>{{str | slice: 3: 5}}</li>
  // <li>{{str | slice: 7}}</li>
  // <li>{{str | slice: -3}}</li>
  // <li>{{str | slice: -3: -2}}</li>
  // <li>{{str | slice: -10}}</li>
  // </ul>`,
  // template: `<ul>
  // <li>{{ary}}</li>
  // <li>{{ary | slice: 3}}</li>
  // <li>{{ary | slice: 3: 5}}</li>
  // <li>{{ary | slice: 7}}</li>
  // <li>{{ary | slice: -3}}</li>
  // <li>{{ary | slice: -3: -2}}</li>
  // <li>{{ary | slice: -10}}</li>
  // </ul>`,
  // template: `<ul>
  // <li>デフォルト：{{price | number}}</li>
  // <li>少数第2位：{{price | number: '5.0-2'}}</li>
  // <li>正数：{{price | number: '1.0-0'}}</li>
  // </ul>`,
  // template: `<ul>
  // <li>デフォルト：{{price | currency}}</li>
  // <li>コード：{{price | currency: 'JPY'}}</li>
  // <li>単位（円）：{{price | currency: 'JPY': true}}</li>
  // <li>単位（ユーロ）：{{price | currency: 'EUR': true}}</li>
  // <li>桁数指定：{{price | currency: 'JPY': true: '1.0-1'}}</li>
  // </ul>`,
  // template: `<ul>
  // <li>デフォルト：{{num | percent}}</li>
  // <li>少数第1位：{{num | percent: '1.0-1'}}</li>
  // </ul>`,
  // template: `<ul>
  // <li>整形なし：{{current}}</li>
  // <li>整形あり（デフォルト）：{{current | date}}</li>
  // <li>整形あり（medium）：{{current | date: 'medium'}}</li>
  // <li>整形あり（書式指定）：{{current | date: 'y MM dd(EEE)'}}</li>
  // </ul>`,
  // template: `<div>{{favs.length | i18nPlural: messages}}</div>`,
  // template: `<ul>
  // <li *ngFor='let m of members'>
  // {{m.sex | i18nSelect :messages}}は{{m.name}}です。
  // </li>
  // </ul>
  // `,
  // template: `
  // <form>
  // <label for='show'>表示/非表示</label>
  // <input id='show' name='show' type='checkbox' [(ngModel)]='show' />
  // </form>
  // <div [style.display]="show ? 'inline': 'none'">
  // <p>表示非表示</p>
  // </div>
  // <div *ngIf='show; then trueContent; else elseContent'>
  // <p>無視される</p>
  // </div>
  // <ng-template #trueContent>
  // <p>WINGSプロジェクトは、当初、ライター...</p>
  // </ng-template>
  // <ng-template #elseContent>
  // <h3 style='color:Red'>非表示中です。</h3>
  // </ng-template>
  // `,
  // template: `
  // <form>
  // <select name='season' [(ngModel)]='season'>
  // <option value=''>四季を選択</option>
  // <option value='spring'>春</option>
  // <option value='summer'>夏</option>
  // <option value='autumn'>秋</option>
  // <option value='winter'>冬</option>
  // </select>
  // </form>
  // <div [ngSwitch]='season'>
  // <span *ngSwitchCase="'spring'">春はあけぼの...</span>
  // <span *ngSwitchCase="'summer'">夏は夜...</span>
  // <span *ngSwitchCase="'autumn'">秋は夕暮れ...</span>
  // <span *ngSwitchCase="'winter'">冬はつとめて...</span>
  // <span *ngSwitchDefault>選択してください</span>
  // </div>
  // `,
  // template: `
  // <table class='table'>
  // <tr>
  // <th>ISBNコード</th><th>署名</th><th>価格</th><th>出版社</th>
  // </tr>
  // <tr *ngFor='let b of books'>
  // <td>{{b.isbn}}</td>
  // <td>{{b.title}}</td>
  // <td>{{b.price}}</td>
  // <td>{{b.publisher}}</td>
  // </tr>
  // </table>
  // `,
  // template: `
  // <table class='table'>
  // <tr>
  // <th>値</th><th>index</th><th>first</th>
  // <th>last</th><th>odd</th><th>even</th>
  // </tr>
  // <tr *ngFor='let obj of data; index as i; first as first; last as last; odd as odd; even as even'>
  // <td>{{obj}}</td>
  // <td>{{i}}</td>
  // <td>{{first ? '○' : '-'}}</td>
  // <td>{{last ? '○' : '-'}}</td>
  // <td>{{odd ? '○' : '-'}}</td>
  // <td>{{even ? '○' : '-'}}</td>
  // </tr>
  // </table>
  // `,
  // template: `
  // <ng-container *ngFor='let article of articles'>
  // <header>{{article.title}}</header>
  // <div>{{article.body}}</div>
  // <footer ng-repeat-end>({{article.author}})</footer>
  // </ng-container>
  // `,
  // template: `<ul>
  // <li *ngFor='let b of books; trackBy: trackFn'>{{b.title}}({{b.isbn}})</li>
  // </ul>
  // <input type='button' (click)='onclick()' value='更新' />
  // `,
  // template: `
  // <table class='table'>
  // <tr>
  // <th>ISBNコード</th><th>書名</th><th>価格</th><th>出版社</th>
  // </tr>
  // <tr *ngFor='let b of books | slice: start: start+len'>
  // <td>{{b.isbn}}</td>
  // <td>{{b.title}}</td>
  // <td>{{b.price}}</td>
  // <td>{{b.publisher}}</td>
  // </tr>
  // </table>
  // <ul class='pagination'>
  // <li><a href='#' (click)='pager(0)'>1</a></li>
  // <li><a href='#' (click)='pager(1)'>2</a></li>
  // <li><a href='#' (click)='pager(2)'>3</a></li>
  // </ul>
  // `,
  // template: `
  // <div [ngStyle]='style'>
  // <p>WINGSは、当初、ライター...</p>
  // </div>
  // `,
  // template: `
  // <input type='button' (click)='back=!back' value='背景色' />
  // <input type='button' (click)='fore=!fore' value='背景色' />
  // <input type='button' (click)='space=!space' value='余白' />
  // <div [ngStyle]='styles'>
  // <p>WINGSは、当初、ライター...</p>
  // </div>
  // `,
  // template: `
  // <div [ngPlural]='favs.length'>
  // <ng-template ngPluralCase='0'>[いいね！]されていません。
  // </ng-template>
  // <ng-template ngPluralCase='1'>1人だけ[いいね！]と言ってくれています。
  // </ng-template>
  // <ng-template ngPluralCase='other'>{{favs.length}}人が[いいね！]と言っています。
  // </ng-template>
  // `,
  // template: `
  // <ng-template #myTemp let-isbn='isbn' let-title='title'
  // let-price='price' let-publisher='publisher'>
  // <div>
  // <img src='http://www.wings.msn.to/books/{{isbn}}/{{isbn}}.jpg'>
  // <ul>
  // <li>{{title}}</li>
  // <li>{{publisher}}発行</li>
  // <li>定価{{price}}円</li>
  // </ul>
  // </div>
  // </ng-template>
  // <select name='temp' [(ngModel)]='temp'>
  // <option *ngFor='let b of books; let i = index' [value]='i'>
  // {{b.title}}</option>
  // </select>
  // <ng-container *ngTemplateOutlet='myTemp; context: books[temp]'>
  // </ng-container>
  // `,
  template: `
  <div>
  広告バナー：<br />
  <ng-container *ngComponentOutlet='banner'></ng-container>
  </div>
  `,
  // template: `<h1>Hello {{name}}</h1>`,

})
export class AppComponent implements OnInit, OnDestroy {
  // title = 'WINGS project';

  // obj: any = {
  //   name: 'トクジロウ',
  //   gender: undefined,
  //   birth: new Date(2007, 7, 15),
  //   age: 3,
  //   family: ['リンリン', 'サチ', 'ニンザブロウ'],
  //   work: function () {/* メソッドの中身 */ },
  //   other: {
  //     favorite: 'ひまわり',
  //     memo: '偏屈爺さん'
  //   }
  // };

  // str = 'いろはにほへと';

  // ary = ['い', 'ろ', 'は', 'に', 'ほ', 'へ', 'と']

  // price = 3500.1256;

  // price = 3500.125;

  // num = 0.123456;

  // current = new Date();

  // favs = ['山田理央', '鈴木洋平', '腰掛奈美'];
  // messages = {
  //   '=0': '[いいね！]されていません。',
  //   '=1': '1人だけ[いいね！]と言ってくれています。',
  //   'other': '#人が[いいね！]と言っています。'
  // };

  // members = [
  //   {name: '佐藤リオ', sex: 'female'},
  //   {name: '田中聡', sex: 'male'},
  //   {name: '郷田瑞季', sex: 'unknown'}
  // ];

  // messages = {
  //   'male': '彼',
  //   'female': '彼女',
  //   'other': '彼/彼女',
  // }

  // show = false;

  // season = '';

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

  // data = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

  // articles = [
  //   {
  //     title: '改訂新版JavaScript本格入門',
  //     body: '[EMACScript 2015]による記述法はもちろん...',
  //     author: '山田００'
  //   },
  //   {
  //     title: 'Swiftポケットリファレンス',
  //     body: 'iOSのフレームワークの解説から全く新しい...',
  //     author: '片渕彼富'
  //   },
  //   {
  //     title: '[改訂新版]Javaポケットリファレンス',
  //     body: '初版でのJava SE 6までの標準ライブラリに...',
  //     author: '高江賢'
  //   }
  // ];

  // books = [
  //   {
  //     isbn: '978-4-7741-8411-1',
  //     title: '改訂新版JavaScript本格入門'
  //   },
  //   {
  //     isbn: '978-4-7980-4853-6',
  //     title: 'はじめてのAndroidアプリ開発 第2版'
  //   },
  //   {
  //     isbn: '978-4-7741-8030-4',
  //     title: '[改訂新版]Javaポケットリファレンス'
  //   },
  // ];

  // onclick() {
  //   this.books = [
  //     {
  //       isbn: '978-4-7741-8411-1',
  //       title: '改訂新版JavaScript本格入門'
  //     },
  //     {
  //       isbn: '978-4-7980-4853-6',
  //       title: 'はじめてのAndroidアプリ開発 第2版'
  //     },
  //     {
  //       isbn: '978-4-7741-8030-4',
  //       title: '[改訂新版]Javaポケットリファレンス'
  //     },
  //     {
  //       isbn: '978-4-7981-3547-2',
  //       title: '独習PHP 第3版'
  //     },
  //   ];
  // }

  // trackFn(index: any, book: any) {
  //   return book.isbn;
  // }

  // start = 0;
  // len = 3;
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
  // ];

  // pager(page: number) {
  //   this.start = this.len * page;
  // }

  // style = {
  //   'backgroundColor': '#f00',
  //   'color': '#fff',
  //   'font-weight': 'bold',
  //   'margin.px': '15',
  //   'padding.px': '15'
  // };

  // back = false;
  // fore = false;
  // space = false;

  // get styles() {
  //   return {
  //     'background-color': this.back ? '#f00' : '',
  //     'color': this.fore ? '#fff' : '#000',
  //     'padding.px': this.space ? '15' : '5',
  //   }
  // }

  // favs: string[] = ['山田リオ', '鈴木洋平', '腰掛奈美'];

  // temp = 0;
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
  // ];

  interval: any;
  comps = [EventComponent, BookComponent, WingsComponent];

  current = 0;
  banner: any = EventComponent;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.current = (this.current + 1) % this.comps.length;
      this.banner = this.comps[this.current];
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
