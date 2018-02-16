import { Component, Input } from '@angular/core';

import { Jersey } from './../../../../../interfaces/jersey.interface';

@Component({
  selector: 'jersey-feature',
  templateUrl: './jersey-feature.component.html',
  styleUrls: ['./jersey-feature.component.css']
})
export class JerseyFeatureComponent {
  @Input() jersey: Jersey;
}
