import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GamesResponse } from 'src/app/types/games-response';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-home',
  template: `
    <app-header [title]="title" [introText]="introText"></app-header>
    <app-news-list [perPage]="NewsPerPage"></app-news-list>
    <button [routerLink]="['/news']" mat-flat-button color="accent">More news</button>

    <mat-list class="results__list">
      <app-game-list-item *ngFor="let game of (lastGames | async)?.data" [game]="game"></app-game-list-item>
    </mat-list>

    <button [routerLink]="['/games']" mat-flat-button color="accent">All game results</button>
    <app-footer></app-footer>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title: string = 'NBA News';
  introText: string = 'Check last NBA scores, stay update about teams and players';
  NewsPerPage: number = 3;
  panelOpenState: boolean = false;
  lastGames: Observable<GamesResponse>;
  
  constructor(private games : GamesService) { 
    this.lastGames = this.games.getLastGames();
  }

}
