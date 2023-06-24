import { Component, Input } from '@angular/core';
import {Team} from "../../../API/Team";

@Component({
  selector: 'app-all-teams-item',
  templateUrl: './all-teams-item.component.html',
  styleUrls: ['./all-teams-item.component.scss']
})
export class AllTeamsItemComponent {
  @Input() team?: Team;

  constructor() { }

}
