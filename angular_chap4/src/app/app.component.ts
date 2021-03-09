import { Component } from '@angular/core';

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
  template: `<ul>
  <li>デフォルト：{{price | number}}</li>
  <li>少数第2位：{{price | number: '5.0-2'}}</li>
  <li>正数：{{price | number: '1.0-0'}}</li>
  </ul>`,
  // template: `<h1>Hello {{name}}</h1>`,

})
export class AppComponent {
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

  price = 3500.1256;
}
