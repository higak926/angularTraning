import { NgModule, LOCALE_ID }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { TrimPipe } from './trim.pipe';
import { Nl2brPipe } from './nl2br.pipe';
import { TruncatePipe } from './truncate.pipe';
import { GrepPipe } from './grep.pipe';
import { ColoredDirective } from './colored.directive';
import { ZipValidator } from './zip.validator';
import { DeadlineDirective } from './deadline.directive'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TrimPipe, Nl2brPipe,
    TruncatePipe, GrepPipe, ColoredDirective, ZipValidator, DeadlineDirective ],
  // entryComponents: [ ],
  providers: [{provide: LOCALE_ID, useValue: 'ja-JP'}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
