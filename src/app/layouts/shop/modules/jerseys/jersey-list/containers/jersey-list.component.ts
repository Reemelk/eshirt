import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { JerseyService } from './../../../../../core/services/jersey.service';

@Component({
  selector: 'jerseys',
  templateUrl: './jersey-list.component.html',
  host: {'class': 'columns is-multiline'},
  styleUrls: ['./jersey-list.component.css']
})
export class JerseyListComponent implements OnInit {
  jerseys$: Observable<any>;

  constructor(private jerseyService: JerseyService) {}

  ngOnInit() {
    this.jerseys$ = this.jerseyService.getJerseys();
  }
}