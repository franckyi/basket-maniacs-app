import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from "./components/shared/material/material.module";
import { HomeComponent } from './views/home/home.component';
import { SearchComponent } from './views/search/search.component';
import { GamesComponent } from './views/games/games.component';
import { TeamsComponent } from './views/teams/teams.component';
import { NewsComponent } from './views/news/news.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameListItemComponent } from './components/game-list/game-list-item/game-list-item.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerListItemComponent } from './components/player-list/player-list-item/player-list-item.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamListItemComponent } from './components/team-list/team-list-item/team-list-item.component';
import { SearchFiltersComponent } from './views/search/search-filters/search-filters.component';
import { SearchPlayerComponent } from './views/search/search-player/search-player.component';
import { SearchTeamComponent } from './views/search/search-team/search-team.component';
import { SearchGameComponent } from './views/search/search-game/search-game.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { PaginatorComponent } from './components/shared/paginator/paginator.component';
import { LogoComponent } from './components/shared/logo/logo.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { AboutComponent } from './views/about/about.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameListItemComponent,
    HomeComponent,
    TeamsComponent,
    SearchComponent,
    GamesComponent,
    FooterComponent,
    PlayerListComponent,
    PlayerListItemComponent,
    TeamListComponent,
    TeamListItemComponent,
    SearchFiltersComponent,
    SearchPlayerComponent,
    SearchTeamComponent,
    SearchGameComponent,
    NewsComponent,
    HeaderComponent,
    PaginatorComponent,
    NewsListComponent,
    LogoComponent,
    SpinnerComponent,
    AboutComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
