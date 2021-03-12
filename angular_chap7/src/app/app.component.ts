import { Component, Injectable, OnInit, Inject, Injector, } from '@angular/core';
import { Http, URLSearchParams, Headers, JsonpModule, Jsonp } from '@angular/http';

import { UseService } from './use.service';
import { Book } from './book'
import { BookService } from './books.service'
import { APP_INFO, KEYWORDS } from './app-info';
import { OverService } from './over.service';
import { HatenaService } from './hatena.service';
import { ValueTransformer } from '@angular/compiler/src/util';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  providers: [HatenaService],
  // providers: [
  //   { provide: OverService, useClass: OverService }
  // ]
})
export class AppComponent {
  // implements OnInit {
  // books: Book[];

  // constructor(private bookservice: BookService) {}

  // ngOnInit() {
  //   this.books = this.bookservice.getBooks();
  // }

  // constructor(@Inject(KEYWORDS)private keywords: string[]) {
  //   console.log(keywords);
  // }

  // constructor(private over: OverService) {}
  // books: Book[];

  // constructor(private injector: Injector){}

  // ngOnInit() {
  //   let bookservice = this.injector.get(BookService);
  //   this.books = bookservice.getBooks();
  //   console.log(bookservice, this.books);
  // }

  // name = '';
  // result = '';

  // constructor(private http: Http) { }

  // onclick() {
  //   // this.http.get('app/http.php', {
  //   //   params: { name: this.name }
  //   // }).subscribe(
  //   //   response => {
  //   //     this.result = response.text();
  //   //   },
  //   //   error => {
  //   //     this.result = '通信失敗；${error.statusText}';
  //   //   }
  //   // );

  //   // let ps = new URLSearchParams();
  //   // ps.set('name', this.name);

  //   // this.http.post('app/http.php', ps, {
  //   //   headers: new Headers({
  //   //     'Content-Type': 'application/x-www-form-urlencoded'
  //   //   })
  //   // }).subscribe(
  //   //   response => {
  //   //     this.result = response.text();
  //   //   },
  //   //   error => {
  //   //     this.result = '通信失敗；${error.statusText}';
  //   //   }
  //   // );

  //   this.http.post('app/http.php', { name: this.name }, {
  //     headers: new Headers({ 'Content-Type': 'application/json' })
  //   }).subscribe(
  //     response => {
  //       this.result = response.text();
  //     },
  //     error => {
  //       this.result = '通信失敗；${error.statusText}';
  //     }
  //   );
  // }

  // url = 'http://gihyo.jp/';
  // count = 0;
  // comments: string[] = [];

  // // constructor(private jsonp: Jsonp) {}
  // constructor(private hatena: HatenaService) {}

  // onclick() {
  //   // let params = new URLSearchParams();
  //   // params.set('url', this.url);
  //   // params.set('callback', 'JSONP_CALLBACK');

  //   // this.jsonp.get('http://b.hatena.ne.jp/entry/jsonlite', {search: params})
  //   // .subscribe(
  //   //   response => {
  //   //     let data = response.json() || {};
  //   //     this.count = data.count;
  //   //     let result: string[] = [];
  //   //     data.bookmarks.forEach(function(value: any){
  //   //       if(value.comment !== '') {
  //   //         console.log(value);
  //   //         result.push(value.comment)
  //   //       }
  //   //     });
  //   //     this.comments = result;
  //   //   },
  //   //   error => {
  //   //     this.count = 0;
  //   //     this.comments = [];
  //   //     console.log('はてなサービスのアクセスに失敗しました。');
  //   //   }
  //   // );
  //   this.hatena.requestGet(this.url)
  //   .subscribe(
  //     data => {
  //       let result: string[] = [];
  //       data.bookmarks.forEach(function(value: any) {
  //         if(value.comment !== '') {
  //           result.push(value.comment)
  //         }
  //       });
  //       this.comments = result;
  //       this.count = data.count;
  //     },
  //     error => {
  //       this.count = 0;
  //       this.comments = [];
  //       console.log('はてなサービスのアクセスに失敗しました。');
  //     }
  //   );
  // }

  // books: any[] = [];

  // constructor(private http: Http) {}

  // ngOnInit() {
  //   this.getAll();
  // }

  // getAll() {
  //   this.http.get('/api/books').subscribe(
  //     response => {
  //       console.log(response.json());
  //       this.books = response.json().data;
  //     }
  //   )
  // }

  // get(num: number) {
  //   this.http.get(`/api/books/${num}`).subscribe(
  //     response => {
  //       console.log(response.json().data);
  //     }
  //   );
  // }

  // insert() {
  //   let headers = new Headers({'Content-Type' : 'application/json'});
  //   this.http.post('api/books',
  //   {
  //     isbn: '978-4-7741-8833-6',
  //     title: 'Ruby on Rails 5 アプリケーションプログラミング',
  //     price: 3500
  //   },
  //   {headers: headers})
  //   .subscribe(response => {this.getAll();});
  // }

  // update() {
  //   let headers = new Headers({'Content-Type': 'application/json'});
  //   this.http.put('api/books/1',
  //   {
  //     id: 1,
  //     isbn: '978-4-7741-8411-X',
  //     title: 'Angular 2 アプリケーションプログラミング',
  //     price: 3700
  //   },{headers: headers})
  //   .subscribe(reponse => {this.getAll()});
  // }

  // delete() {
  //   this.http.delete('api/books/1')
  //   .subscribe(response => {
  //     this.getAll();
  //   });
  // }

  message: Observable<string>;
  constructor(private http: Http){}

  ngOnInit() {
    this.message = this.http.get('app/message.txt')
    .delay(3000)
    .map(response => response.text());
  }
}
