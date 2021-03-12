import { NgModule, LOCALE_ID }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, RequestOptions } from '@angular/http'
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MyRequestOptions } from './my-request-options';

import { AppComponent }  from './app.component';
import { UseComponent } from './use.component';
import { BookService } from './books.service';
import { APP_INFO, KEYWORDS, MY_APP_INFO } from './app-info';
import { ChildComponent } from './child.component';
import { ParentComponent } from './parent.component';
import { NoParentComponent } from './no-parent.component';
import { BooksData } from './books-data';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule, InMemoryWebApiModule.forRoot(BooksData) ],
  declarations: [ AppComponent, UseComponent, ChildComponent, ParentComponent, NoParentComponent ],
  entryComponents: [ ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ja-JP'},
    BookService,
    {provide: APP_INFO, useValue: MY_APP_INFO},
    {provide: KEYWORDS, useValue: 'TypeScript', multi: true},
    {provide: KEYWORDS, useValue: 'Angular', multi: true},
    {provide: RequestOptions, useClass: MyRequestOptions}
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
