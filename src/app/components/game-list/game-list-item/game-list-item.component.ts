import { Component, Input } from '@angular/core';
import {Game} from "../../../API/Game";

@Component({
  selector: 'app-game-list-item',
  template: `
    <li class="results__item">
      <div class="game__main-info">
          <div class="game__team">
              <img
                class="game__logo"
                src="../../assets/img/team-logos/{{ game?.home_team?.abbreviation }}.png"
                [alt]="game?.home_team?.full_name + 'logo'">
              <span class="game__team-name">{{ game?.home_team?.abbreviation }}
              </span>
              <span class="game__score">{{ game?.home_team_score }}</span>
          </div>
          <span class="game__vs">VS</span>
          <div class="game__team">
              <span class="game__score">{{ game?.visitor_team_score }}</span>
              <img
                class="game__logo"
                [src]="'../../assets/img/team-logos/' + game?.visitor_team?.abbreviation + '.png'"
                [alt]="game?.visitor_team?.full_name + 'logo'">
              <span class="game__team-name">{{ game?.visitor_team?.abbreviation }}</span>
          </div>
      </div>
      <div class="game__minor-info">
          <span class="game__date">{{ game?.date | date: 'mediumDate'}} | </span>
          <span class="game__city">{{ game?.home_team?.city }}</span>
      </div>
    </li>
  `,
  styleUrls: ['./game-list-item.component.scss']
})
export class GameListItemComponent {

  @Input() game?: Game;

  constructor() { }

}
