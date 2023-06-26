import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesViewComponent } from './views/games/games-view.component';
import { HomeComponent } from './views/home/home.component';
import { SearchComponent } from './views/search/search.component';
import { TeamsComponent } from './views/teams/teams.component';
import { NewsComponent } from './views/news/news.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'teams',
    component: TeamsComponent
  },
  {
    path: 'games',
    component: GamesViewComponent
  },
  {
    path: 'news',
    component: NewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
