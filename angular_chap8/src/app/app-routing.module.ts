import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { HatenaResolver } from './hatena-resolver.service';
import { HatenaComponent } from './hatena.component';
import { HatenaService } from './hatena.service';
import { ArticleComponent } from './article.component';
import { TimeGuard } from './time.guard';

const myRoutes = [
  { path: '', component: MainComponent },
  {
    path: 'article/:id',
    component: ArticleComponent,
    canActivate: [TimeGuard]
  },
  {
    path: 'hatena/:url', component: HatenaComponent,
    resolve: {
      hatena: HatenaResolver
    }
  },
]

@NgModule({
  imports: [RouterModule.forRoot(myRoutes)],
  exports: [RouterModule],
  providers: [HatenaService, HatenaResolver, TimeGuard]
})
export class AppRoutingModule{}