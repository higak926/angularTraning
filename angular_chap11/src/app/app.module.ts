import { NgModule, LOCALE_ID }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AccordionModule.forRoot(), CustomFormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent ],
  // entryComponents: [ ],
  providers: [{provide: LOCALE_ID, useValue: 'ja-JP'}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
