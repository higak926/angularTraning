import { NgModule, LOCALE_ID, NO_ERRORS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { JsonpModule }  from "@angular/http";

import { AppComponent }  from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, JsonpModule ],
  declarations: [ AppComponent ],
  schemas: [NO_ERRORS_SCHEMA],
  // entryComponents: [ ],
  providers: [{provide: LOCALE_ID, useValue: 'ja-JP'}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
