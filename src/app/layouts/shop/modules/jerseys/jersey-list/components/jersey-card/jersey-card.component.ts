import { Component, Input } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

import { Jersey } from './../../../../../interfaces/jersey.interface';

@Component({
  selector: 'jersey-card',
  templateUrl: './jersey-card.component.html',
  styleUrls: ['./jersey-card.component.css']
})
export class JerseyCardComponent {
  @Input() jersey: Jersey;
}
