import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <nav class="main-nav">
      <button [routerLink] = "['']" mat-icon-button color="accent" aria-label="Go to Home">
          <mat-icon>home</mat-icon>
          <span class="main-nav__label">Home</span>
      </button>
      <button [routerLink]= "['/search']" mat-icon-button color="primary" aria-label="Go to search page">
          <mat-icon>search</mat-icon>
          <span class="main-nav__label">Search</span>
      </button>
      <button [routerLink] = "['/teams']" mat-icon-button color="primary" aria-label="Go to Teams page">
          <mat-icon>groups</mat-icon>
          <span class="main-nav__label">Teams</span>
      </button>
      <button [routerLink] = "['/scores']" mat-icon-button color="primary" aria-label="Go to Scoreboard">
          <mat-icon>sports_basketball</mat-icon>
          <span class="main-nav__label">Scores</span>
      </button>
      <button [routerLink]="['/news']" mat-icon-button color="primary" aria-label="Read News">
          <mat-icon>newspaper</mat-icon>
          <span class="main-nav__label">News</span>
      </button>
    </nav>
  `,
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
