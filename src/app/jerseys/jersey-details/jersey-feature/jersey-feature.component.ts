import { Component, OnInit, Input } from '@angular/core';

import { Jersey } from './../../jersey.model';

@Component({
  selector: 'jersey-feature',
  templateUrl: './jersey-feature.component.html',
  styleUrls: ['./jersey-feature.component.css']
})
export class JerseyFeatureComponent implements OnInit {
  @Input() jersey: Jersey;

  constructor() { }

  ngOnInit() {
  }

}
