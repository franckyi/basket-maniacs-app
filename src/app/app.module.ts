import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from "./components/common/material/material.module";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LatestScoresComponent } from './components/latest-scores/latest-scores.component';
import { LatestScoreItemComponent } from './components/latest-scores/latest-score-item/latest-score-item.component';
import { HomeComponent } from './views/home/home.component';
import { TeamsComponent } from './views/teams/teams.component';
import { SearchComponent } from './views/search/search.component';
import { GameScoresComponent } from './views/game-scores/game-scores.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { AllScoresComponent } from './components/all-scores/all-scores.component';
import { AllPlayersComponent } from './components/all-players/all-players.component';
import { AllPlayersItemComponent } from './components/all-players/all-players-item/all-players-item.component';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { AllTeamsItemComponent } from './components/teams-list/all-teams-item/all-teams-item.component';
import { AllStatsComponent } from './components/all-stats/all-stats.component';
import { AllStatsItemComponent } from './components/all-stats/all-stats-item/all-stats-item.component';
import { SearchFiltersComponent } from './views/search/search-filters/search-filters.component';
import { SearchPlayerComponent } from './views/search/search-player/search-player.component';
import { SearchTeamComponent } from './views/search/search-team/search-team.component';
import { SearchGameComponent } from './views/search/search-game/search-game.component';
import { RandomPlayerComponent } from './components/all-players/random-player/random-player.component';
import { NewsComponent } from './views/news/news.component';
import { NavigationComponent } from './components/common/navigation/navigation.component';
import { HeaderComponent } from './components/common/header/header.component';
import { PaginationComponent } from './components/common/pagination/pagination.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsListItemComponent } from './components/news-list/news-list-item/news-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestScoresComponent,
    LatestScoreItemComponent,
    HomeComponent,
    TeamsComponent,
    SearchComponent,
    GameScoresComponent,
    FooterComponent,
    AllScoresComponent,
    AllPlayersComponent,
    AllPlayersItemComponent,
    TeamsListComponent,
    AllTeamsItemComponent,
    AllStatsComponent,
    AllStatsItemComponent,
    SearchFiltersComponent,
    SearchPlayerComponent,
    SearchTeamComponent,
    SearchGameComponent,
    RandomPlayerComponent,
    NewsComponent,
    NavigationComponent,
    HeaderComponent,
    PaginationComponent,
    NewsListComponent,
    NewsListItemComponent
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
export class AppModule { }
