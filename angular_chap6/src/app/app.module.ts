import { NgModule, LOCALE_ID }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoopModule } from './coop/coop.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }  from './app.component';
import { ChildComponent } from './child.component';
import { ContentComponent } from './content.component';
import { ParentComponent } from './parent.component';
import { EventComponent } from './event.component';
import { BookComponent } from './book.component';
import { WingsComponent } from './wings.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, ReactiveFormsModule, HttpModule, CoopModule ],
  declarations: [ AppComponent, ChildComponent, ContentComponent, ParentComponent, EventComponent, BookComponent, WingsComponent ],
  entryComponents: [EventComponent, BookComponent, WingsComponent ],
  providers: [{provide: LOCALE_ID, useValue: 'ja-JP'}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
