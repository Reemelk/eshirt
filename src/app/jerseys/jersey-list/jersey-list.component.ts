import { Component, OnInit } from '@angular/core';

import { Jersey } from './../jersey.model';
import { JerseyService } from './../jersey.service';

@Component({
  selector: 'jersey-list',
  templateUrl: './jersey-list.component.html',
  styleUrls: ['./jersey-list.component.css']
})
export class JerseyListComponent implements OnInit {
  jerseys: Jersey[];
  teamnames: String[];

  constructor(private jerseyService: JerseyService) {}

  ngOnInit() {
    this.jerseyService.getJerseys().subscribe(jerseys => this.jerseys = jerseys);
    this.jerseyService.getMostSoldJerseys().subscribe(teamnames => this.teamnames = teamnames);
  }
}
