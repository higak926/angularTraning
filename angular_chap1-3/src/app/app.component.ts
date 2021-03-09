import { Component } from '@angular/core';
// import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'my-app',
  // template: `<h1>Hello {{name}}</h1>`,
  // template: `<div [innerHTML]='safeMsg'></div>`,
  // template: `<iframe [src]='safeUrl'></iframe>`,
  // template: `<div class='line back' [class.fore]='flag'>WINGSプロジェクト</div>`,
  // styles: [`
  // .line {border: solid 1px #f00;}
  // .back {background-color: #0ff;}
  // .fore {color: Red;}`]
  // template: `<input type='button' (click)='show($event)' value='現在時刻' />
  // {{msg}}`,
  // template: `<div id='main' style='position: absolute; margin: 50px; width: 300px; height: 300px; border:solid 1px #000' (mousemove)='show($event)'>
  // <p>screen: {{screenX}} × {{screenY}}</p>
  // <p>page: {{pageX}} × {{pageY}}</p>
  // <p>{{clientX}} × {{clientY}}</p>
  // <p>{{offsetX}} × {{offsetY}}</p>
  // </div>`,
  // template: `<form>
  // <label for='key'>キー入力：</label>
  // <input id='key' name='key' (keydown)='show($event)' />
  // </form>
  // <div>キーコード：{{which}}</div>
  // <div [hidden]='!altKey'> [Alt] </div>
  // <div [hidden]='!ctrlKey'> [Ctrl] </div>
  // <div [hidden]='!shiftKey'> [Shift] </div>`,
  // template: `
  // <form>
  // <label for='zip'>郵便番号：</label>
  // <input id='zip' name='zip' type='text' size='10' (keypress)='mask($event)' />
  // </form>`,
  // template: `
  // <div id='outer' (click)='onclick1()'>outer
  // <div id='inner' (click)='onclick2($event)'>inner</div>
  // </div>
  // `,
  // template: `
  // <input id='txt' name='txt' type='text' (input)='show($event)' />
  // <ul [innerHTML]='msg'><ul>
  // `,
  // template: `
  // <input #txt id='txt' name='txt' type='text' (input)='show(txt.value)' />
  // <ul [innerHTML]='msg'></ul>
  // `,
  // template: `
  // <label>姓：<input #last type='text' (change)='0' /></label><br />
  // <label>名：<input #first type='text' (change)='0' /></label>
  // <div>こんにちは、{{last.value}}{{first.value}}さん！</div>
  // `,
  // template: `
  // <input id='txt' name='txt' type='text' (keyup.enter)='show($event)' />
  // <ul [innerHTML]='msg'></ul>
  // `,
  template: `
  <form>
  <label for='name'>名前：</label>
  <input id='name' name='name' type='text' [(ngModel)]='myName' />
  <div>こんにちは、{{myName}}さん！</div>
  </form>
  `,
  // template: `<h1>Hello {{name}}</h1>`,
  // styleUrls: ['app/app.component.css']

})
export class AppComponent {
  // safeMsg: safeHtml;
  // msg: string = `<script>window.alert('ようこそ！！');</script>
  // <div style='font-size:20px;'>
  // <p>WINGSプロジェクト</p>
  // </div>
  // <a href='http://www.wings.msn.to/'>Web</a>
  // <button>同意する</button>
  // <input type='button' onclick='alert('OK')' value='クリック' />`;

  // constructor(private sanitizer: DomSanitizer) {
  //   this.safeMsg = sanitizer.bypassSecurityTrustHtml(this.msg);
  // }

  // safeUrl: SafeResourceUrl;
  // url = 'http://www.wings.msn.to/';
  // constructor(private sanitizer: DomSanitizer) {
  //   this.safeUrl = sanitizer.bypassSecurityTrustResourceUrl(this.url);
  // }

  // flag = true;

  // msg = '---';
  // show(e: any) {
  //   this.msg = new Date().toLocaleString();
  //   console.log(e);
  // }

  // screenX = 0;
  // screenY = 0;
  // pageX = 0;
  // pageY = 0;
  // clientX = 0;
  // clientY = 0;
  // offsetX = 0;
  // offsetY = 0;

  // show(e: any) {
  //   this.screenX = e.screenX;
  //   this.screenY = e.screenY;
  //   this.pageX = e.pageX;
  //   this.pageY = e.pageY;
  //   this.clientX = e.clientX;
  //   this.clientY = e.clientY;
  //   this.offsetX = e.offsetX;
  //   this.offsetY = e.offsetY;
  // }

  // which = '';
  // altKey = false;
  // ctrlKey = false;
  // shiftKey = false;

  // show(e: any) {
  //   this.which = e.which;
  //   this.altKey = e.altKey;
  //   this.ctrlKey = e.ctrlKey;
  //   this.shiftKey = e.shiftKey;
  // }

  // mask(e: any) {
  //   let k = e.which;
  //   if (!((k >= 48 && k <= 57) || k === 45 || k === 8 || k === 0)) {
  //     e.preventDefault();
  //   }
  // }

  // onclick1(e: any) {
  //   console.log('outerをクリックしました！')
  // }

  // onclick2(e: any) {
  //   e.stopPropagation();
  //   console.log('innerをクリックしました！')
  // }

  // msg = '';
  // show(e: any) {
  //   this.msg += `<li>${e.target.value}</li>`
  // }

  // msg = '';
  // show(input: string) {
  //   this.msg += `<li>${input}</li>`;
  // }

  // こんにちは〇〇さんのテンプレート参照変数はロジックなし

  // msg = '';
  // show(e: any) {
  //   this.msg += `<li>${e.target.value}</li>`
  // }

  myName = '山田';

}
