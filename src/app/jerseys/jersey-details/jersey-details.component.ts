import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Jersey } from './../jersey.model';
import { JerseyService } from './../jersey.service';

@Component({
  selector: 'jersey-details',
  templateUrl: './jersey-details.component.html',
  styleUrls: ['./jersey-details.component.css']
})
export class JerseyDetailsComponent implements OnInit {
  friendly_params: string;
  jersey: Jersey;

  constructor(private route: ActivatedRoute, private jerseyService: JerseyService) {
    this.friendly_params = this.route.snapshot.params['terms'];
  }

  ngOnInit() {
    this.jerseyService.getJersey(this.friendly_params).subscribe(data => this.jersey = data);
  }
}
