import { Component, OnInit } from '@angular/core';
import {RatingsService} from '../ratings.service';

@Component({
  selector: 'app-ratings-list',
  templateUrl: './ratings-list.component.html',
  styleUrls: ['./ratings-list.component.css']
})
export class RatingsListComponent implements OnInit {
  static readonly REFRESH_INTERVAL = 10000; // ms

  constructor(private ratingsService: RatingsService) { }

  ratingsList: any;
  interval: any;

  ngOnInit() {
    this.refreshData();
    this.interval = setInterval(() => {
      this.refreshData();
    }, RatingsListComponent.REFRESH_INTERVAL);
    this.ratingsService.newRatingSavedEvent.subscribe(
      () => this.refreshData()
    );
  }

  refreshData() {
    this.ratingsService.findAll()
    .subscribe((data: any) => this.ratingsList = data.body._embedded.ratings.reverse());
  }
}
