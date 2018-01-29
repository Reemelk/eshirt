import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jersey-nav',
  templateUrl: './jersey-nav.component.html',
  styleUrls: ['./jersey-nav.component.css']
})
export class JerseyNavComponent implements OnInit {
  @Input() teamnames: String[];
  
  constructor() {}

  ngOnInit() {
  }

}
