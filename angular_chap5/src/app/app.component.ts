import { Component, OnDestroy, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'my-app',
  // template: `
  // <form #myForm='ngForm' (ngSubmit)='show()' novalidate>
  // <div>
  // <label for='mail'>メールアドレス：</label><br />
  // <input id='mail' name='mail' type='email' [(ngModel)]='user.mail' #mail='ngModel' required email />
  // <span *ngIf='mail.error?.required'>
  // メールアドレスは必須です。</span>
  // <span *ngIf='mail.error?.email'>
  // メールアドレスを正しい形式で入力してください。</span>
  // </div>
  // <div>
  // <label for='passwd'>パスワード：</label><br />
  // <input id='passwd' name='passwd' type='password' [(ngModel)]='user.passwd' required minlength='6' #passwd='ngModel' />
  // <span *ngIf='passwd.error?.required'>
  // パスワードは必須です。</span>
  // <span *ngIf='passwd.error?.minlength'>
  // パスワードは6文字以上で入力してください。</span>
  // </div>
  // <div>
  // <label for='name'>名前（漢字）：</label><br />
  // <input id='name' name='name' type='text' [(ngModel)]='user.name'
  // required minlength='3' maxlength='10' #name='ngModel' />
  // <span *ngIf='name.error?.required'>
  // 名前（漢字）は必須です。</span>
  // <span *ngIf='name.error?.minlength'>
  // 名前（漢字）は3文字以上で入力してください。</span>
  // <span *ngIf='name.error?.maxlength'>
  // 名前（漢字）は10文字以内で入力してください。</span>
  // </div>
  // <div>
  // <label for='memo'>備考：</label><br />
  // <textarea id='memo' name='memo' rows='5' cols='30'
  // [(ngModel)]='user.memo' max.length='10' #memo='ngModel'></textarea>
  // <span *ngIf='memo.error?.maxlength'>
  // 備考は10文字以内で入力してください。</span>
  // </div>
  // <div>
  // <input type='submit' value='送信' [disabled]='myForm.invalid || myForm.submitted' />
  // <input type='reset' value='リセット' [disabled]='myForm.pristine' />
  // </div>
  // </form>
  // <pre>{{myForm.value | json}}</pre>
  // `,
  // template: `
  // <form #myForm='ngForm'>
  // <ng-container *ngFor='let item of data; index as i'>
  // <label>
  // <input type='radio' name='animal' [(ngModel)]='selected'
  // [value]='item.value' [checked]='selected == item.value'
  // (change)='show(i)'>{{item.label}}
  // </label><br />
  // </ng-container>
  // </form>
  // `,
  // template: `
  // <form #myForm='ngForm'>
  // <ng-container *ngFor='let item of data; index as i'>
  // <label>
  // <input type='checkbox' name='animal{{i}}' [(ngModel)]='data[i].selected'
  // [value]='item.value'
  // (change)='show()'>{{item.label}}
  // </label><br />
  // </ng-container>
  // </form>
  // `,
  // template: `
  // <form #myForm='ngForm'>
  // <select name='animal' [(ngModel)]='selected' (change)='show()'>
  // <option value=''>ペットを選択してください。</option>
  // <option *ngFor='let item of data' [value]='item.value'
  // [disabled]='item.disabled' [selected]='item.value === selected'>{{item.label}}</option>
  // </select>
  // </form>
  // `,
  // template: `
  // <form #myForm='ngForm'>
  // <select name='animal' [(ngModel)]='selected' (change)='show()'>
  // <option value=''>ペットを選択してください。</option>
  // <optgroup *ngFor='let group of keys(data)' label={{group}}>
  // <option *ngFor='let item of data[group]'
  // [value]='item.value' [disabled]='item.disabled'
  // [selected]='item.value === selected'>{{item.label}}
  // </option>
  // </optgroup>
  // </select>
  // </form>
  // `,
  // template: `
  // <form>
  // <textarea cols='70' rows='5' name='tweet' [(ngModel)]='tweet' (input)='setcolor()'></textarea>
  // <div [ngStyle]='myStyle'>{{count}}</div>
  // </form>
  // `,
  // template: `
  // <form>
  // <label for='mail'>メールアドレス：</label>
  // <textarea id='mail' name='mail' type='text' [ngModel]="emails.join(';')"
  // (ngModelChange)="emails=$event.split(';')"></textarea>
  // </form>
  // <ul>
  // <li *ngFor='let email of emails'>{{email}}</li>
  // </ul></form>
  // `,
  // template: `
  // <form>
  // <input id='upfile' name='upfile' type='file' #fl accept='image/*'
  // (change)='upload(fl.files)' />
  // </form>
  // `,
  template: `
  <form [formGroup]='myForm' (ngSubmit)='show()'>
  <div>
  <label for='mail'>メールアドレス</label><br />
  <input id='mail' nema='mail' type='email' [formControl]='mail' />
  <span *ngIf='mail.errors?.required'>メールアドレスは必須です。</span>
  <span *ngIf='mail.errors?.email'>メールアドレスは正しい形式で入力してください。</span>
  </div>
  <div>
  <label for='passwd'>パスワード</label><br />
  <input id='passwd' nema='passwd' type='password' [formControl]='passwd' />
  <span *ngIf='passwd.errors?.required'>パスワードは必須です。</span>
  <span *ngIf='passwd.errors?.minlength'>パスワードは6文字以上で入力してください。</span>
  </div>
  <div>
  <label for='name'>名前（漢字）</label><br />
  <input id='name' nema='name' type='text' [formControl]='name' />
  <span *ngIf='name.errors?.required'>名前（漢字）は必須です。</span>
  <span *ngIf='name.errors?.minlength'>名前は3文字以上で入力してください。</span>
  <span *ngIf='name.errors?.maxlength'>名前は10文字以内で入力してください。</span>
  </div>
  <div>
  <label for='memo'>メモ</label><br />
  <input id='memo' nema='memo' type='text' [formControl]='memo' />
  <span *ngIf='memo.errors?.maxlength'>メモは10文字以内で入力してください。</span>
  </div>
  <div>
  <input type='submit' value='送信' [disabled]='myForm.invalid' />
  </div>
  </form>

  <p>{{v}}</p>
  `,
})
export class AppComponent {
  // user = {
  //   mail: 'hoge@example.com',
  //   passwd: '',
  //   name: '名無権兵衛',
  //   memo: 'メモ'
  // };

  // show() {
  //   console.log('メールアドレス：' + this.user.mail);
  //   console.log('パスワード：' + this.user.passwd);
  //   console.log('名前（漢字）：' + this.user.name);
  //   console.log('備考：' + this.user.memo);
  // }

  // selected = 'hamster';
  // data = [
  //   { label: '犬', value: 'dog' },
  //   { label: '猫', value: 'cat' },
  //   { label: 'ハムスター', value: 'hamster' },
  //   { label: '金魚', value: 'fish' },
  //   { label: '亀', value: 'turtle' },
  // ]
  // show(i: number) {
  //   console.log('現在地（ラベル）：' + this.data[i].label);
  //   console.log('現在地（値）：' + this.selected);
  // }

  // data = [
  //   { label: '犬', value: 'dog', selected: false },
  //   { label: '猫', value: 'cat', selected: false  },
  //   { label: 'ハムスター', value: 'hamster', selected: true  },
  //   { label: '金魚', value: 'fish', selected: false  },
  //   { label: '亀', value: 'turtle', selected: false  },
  // ]
  // show(i: number) {
  //   console.log(this.data);
  // }

  // selected = 'hamster';
  // data = [
  //   { label: '犬', value: 'dog', selected: false },
  //   { label: '猫', value: 'cat', selected: false  },
  //   { label: 'ハムスター', value: 'hamster', selected: false },
  //   { label: '金魚', value: 'fish', selected: false  },
  //   { label: '亀', value: 'turtle', selected: false  },
  // ]

  // show() {
  //   console.log('現在地：' + this.selected);
  // }

  // selected = 'dog';
  // data = {
  //   '哺乳類': [
  //     { label: '犬', value: 'dog', disable: false },
  //     { label: '猫', value: 'cat', disable: false },
  //     { label: 'ハムスター', value: 'hamster', disable: false },
  //   ],
  //   '魚類': [
  //     { label: '金魚', value: 'fish', disable: true },
  //     { label: '鯉', value: 'carp', disable: false },
  //     { label: '熱帯魚', value: 'tropical fish', disable: false },
  //   ],
  //   '爬虫類': [
  //     { label: '亀', value: 'turtle', disable: false },
  //     { label: 'トカゲ', value: 'lizard', disable: false },
  //     { label: 'ヘビ', value: 'snake', disable: false },
  //   ],
  // };
  // keys(obj: Object) {
  //   return Object.keys(obj);
  // }
  // show() {
  //   console.log('現在地：' + this.selected);
  // }

  // max = 140;
  // tweet = '';
  // count = this.max;
  // myStyle = { color: '#00f', fontWeight: 'nomal' };

  // setcolor() {
  //   this.count = this.max - this.tweet.length;
  //   if (this.count > 10) {
  //     this.myStyle = { color: '#00f', fontWeight: 'nomal' };
  //   } else if (this.count > 0) {
  //     this.myStyle = { color: '#f0f', fontWeight: 'nomal' };
  //   } else {
  //     this.myStyle = { color: '#f00', fontWeight: 'bold' };
  //   }
  // }

  // emails: String[] = [];

  // constructor(private http:Http) {}
  // upload(list: any) {
  //   if (list.length <= 0) { return; }

  //   let f = list[0];
  //   let data = new FormData();
  //   data.append('upfile', f, f.name);
  //   this.http.post('app/this.upload.php', data)
  //   .subscribe(
  //     data => console.log(data),
  //     error => console.log(error)
  //   );
  // }

  mail = new FormControl('aaa@example.com', [
    Validators.required,
    Validators.email
  ]);
  passwd = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
  name = new FormControl('名無権兵衛', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10)
  ]);
  memo = new FormControl('メモ', [
    Validators.maxLength(10)
  ]);

  myForm = this.builder.group({
    mail: this.mail,
    passwd: this.passwd,
    name: this.name,
    memo: this.memo
  });

  constructor(private builder: FormBuilder) { }

  show() {
    console.log('メールアドレス：' + this.mail.value);
    console.log('パスワード' + this.passwd.value);
    console.log('名前（漢字）：' + this.name.value);
    console.log('備考：' + this.memo.value);
    console.log('すべて：');
    console.log(this.myForm.value);
  }

  v = VERSION.full;
}
