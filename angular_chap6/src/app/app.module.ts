import { NgModule, LOCALE_ID }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { EventComponent } from './event.component';
import { BookComponent } from './book.component';
import { WingsComponent } from './wings.component';


@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, HttpModule ],
  declarations: [ AppComponent, EventComponent, BookComponent, WingsComponent ],
  entryComponents: [EventComponent, BookComponent, WingsComponent ],
  providers: [{provide: LOCALE_ID, useValue: 'ja-JP'}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
