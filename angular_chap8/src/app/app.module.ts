import { NgModule, LOCALE_ID }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MY_ROUTES } from './app.routing';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { MainComponent } from './main.component';
import { ExampleComponent } from './example.component';
import { ErrorComponent } from './error.component';
import { ArticleComponent } from './article.component';
import { ParamComponent } from './param.component';
import { DataComponent } from './data.component';
import { SearchComponent } from './search.component';
import { HatenaComponent } from './hatena.component';
import { ContentComponent } from './content.component';
import { ChildComponent } from './child.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MY_ROUTES, AppRoutingModule ],
  declarations: [ AppComponent, MainComponent, ExampleComponent,
    ErrorComponent, ArticleComponent, ParamComponent, DataComponent,
    SearchComponent, HatenaComponent, ContentComponent, ChildComponent ],
  // entryComponents: [ ],
  providers: [{provide: LOCALE_ID, useValue: 'ja-JP'}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
