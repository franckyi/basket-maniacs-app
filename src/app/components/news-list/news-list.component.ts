import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';
import { Observable } from "rxjs";
import { News } from 'src/app/API/news';
import { SearchNewsInputs } from 'src/app/types/search-news-inputs';

@Component({
  selector: 'app-news-list',
  template: `
    <h2 class="section-heading">Last news</h2>

    <label id="radio-group-label">Pick a news provider</label>
    <mat-radio-group
      aria-labelledby="radio-group-label"
      class="radio-group"
      (change)="changeProvider($event)"
      [(ngModel)]="selectedSource">
      <mat-radio-button class="radio-button" *ngFor="let source of sources" [value]="source">
        {{source}}
      </mat-radio-button>
    </mat-radio-group>
    <div *ngIf="selectedSource">You're currently viewing news from <strong style="text-transform: capitalize">{{selectedSource}}</strong></div>

    <div>
      <mat-form-field class="news__input">
        <mat-label for="player">Player</mat-label>
        <input
          matInput id="player"
          placeholder="First or last name"
          (input)="getNews()"
          [(ngModel)]="searchParameters.player"
          (keydown.enter)="searchParameters!.player"
        >
      </mat-form-field>

      <mat-form-field class="news__input">
        <mat-label for="team">Team</mat-label>
        <input
          matInput id="team"
          placeholder="Enter a team name"
          (input)="getNews()"
          [(ngModel)]="searchParameters.team"
          (keydown.enter)="searchParameters!.team"
        >
      </mat-form-field>
    </div>

    <app-spinner *ngIf="loading; else contentBlock"></app-spinner>

    <ng-template #contentBlock>
      <mat-list class="results__list">
        <a [href]="item.url" *ngFor="let item of (newsList | async) | slice:0:perPage" target="_blank" rel="nofollow">
          <mat-list-item class="results__item news">
            <div matBadge="{{item.source}}" matBadgeColor="accent" matBadgeOverlap="false">{{ item.title }}</div>
          </mat-list-item>
        </a>
      </mat-list>
    </ng-template>
  `,
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  @Input() perPage?: number;

  newsList?: Observable<News[]>;
  searchParameters: SearchNewsInputs = {
    player: '',
    team: '',
    source: 'nba'
  }

  sources: string[] = [ 'nba-canada', 'nba', 'bleacher-report', 'espn', 'slam' ]
  selectedSource?: string;
  
  hidden = false;
  loading: boolean = true;

  constructor(private api: ApiService) {
    
  }

  ngOnInit(): void {
    this.newsList = this.api.getInitialNews();
    this.newsList.subscribe( response => {
      if (response) this.loading = false;
    })
  }

  changeProvider($event: any) {
    this.searchParameters.source = $event.value;
    this.getNews();
  }

  getNews() {
    this.loading = true;
    this.newsList = this.api.getNews(this.searchParameters.source?? 'nba', this.searchParameters.player, this.searchParameters.team);
    this.newsList.subscribe( response => {
      if (response) this.loading = false;
    })
  }

}
