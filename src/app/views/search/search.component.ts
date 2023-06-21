import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangeFiltersService } from './services/change-filters.service';
import { Filter } from './services/filter';

@Component({
  selector: 'app-search',
  template: `
    <app-header [heading]="heading"></app-header>
    <app-search-player *ngIf="(currentFilter$ | async) == 'player'"></app-search-player>
    <app-search-team  *ngIf="(currentFilter$ | async) == 'team'"></app-search-team>
    <app-search-game  *ngIf="(currentFilter$ | async) == 'game'"></app-search-game>
  `,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  heading: string = 'Search';
  currentFilter$: Observable <Filter>;   

  constructor(private filterService: ChangeFiltersService) {
    this.currentFilter$ = filterService.getCurrentFilter$();
     }

  ngOnInit(): void {
  }

}
