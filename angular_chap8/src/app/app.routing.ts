import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { ExampleComponent } from './example.component';
import { ErrorComponent } from './error.component';
import { ArticleComponent } from './article.component';
import { ParamComponent } from './param.component';
import { DataComponent } from './data.component';
import { SearchComponent } from './search.component';
import { ContentComponent } from './content.component';
import { ChildComponent } from './child.component';

const myRoutes = [
  {
    path: 'contents/:id', component: ContentComponent,
    children: [
      { path: 'pages/:page', component: ChildComponent }
    ]
  },
  { path: 'search', children: [{ path: '**', component: SearchComponent }] },
  { path: 'data', component: DataComponent, data: { category: 'Angular' } },
  { path: 'param', component: ParamComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'exam', component: ExampleComponent },
  { path: 'main', component: MainComponent },
  { path: 'search/:id', component: SearchComponent, outlet: 'other' },
  { path: '', redirectTo: '/main(other:search/Angular)', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
  // {path: '**', component: ErrorComponent},
];

export const MY_ROUTES: ModuleWithProviders =
  RouterModule.forRoot(myRoutes);
