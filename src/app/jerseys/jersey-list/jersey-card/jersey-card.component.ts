import { Component, OnInit, Input } from '@angular/core';

import { Jersey } from './../../jersey.model';

@Component({
  selector: 'jersey-card',
  templateUrl: './jersey-card.component.html',
  styleUrls: ['./jersey-card.component.css']
})
export class JerseyCardComponent implements OnInit {
  @Input() jersey: Jersey;

  constructor() {}

  ngOnInit() {
  }

}
