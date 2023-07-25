import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  introText = 'Made with Angular version ' + VERSION.full;

  constructor() { }

  ngOnInit(): void {
  }

}
