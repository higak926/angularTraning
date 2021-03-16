import { Component } from '@angular/core';
import { Jsonp, URLSearchParams }  from '@angular/http';
import { HatenaService } from './hatena.service';

@Component({
  selector: 'my-app',
  providers: [ HatenaService ],
  templateUrl: './app.component.html',
  // template: `
  // <h1>{{name}}</h1>
  // <p>{{name}}</p>
  // `
})
export class AppComponent {
  name = 'angular';

  url = 'http://gihyo.jp/';
  count = 0;
  comments: string[] = [];

  constructor(private hatena:HatenaService) {}

  onclick() {
    this.hatena.requestGet(this.url)
      .subscribe(
        data => {
          let result: string[] = [];
          data.bookmarks.forEach(function(value: any) {
            if (value.comment !== '') {
              result.push(value.comment)
            }
          });
          this.comments = result;
          this.count = data.count;
        },
        error => {
          this.count = 0;
          this.comments = [];
          console.log('はてなサービスのアクセスに失敗しました。');
        }
      );
  }

}
