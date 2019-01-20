import { Component, OnInit } from '@angular/core';
import {RatingsService} from '../ratings.service';

@Component({
  selector: 'app-ratings-list',
  templateUrl: './ratings-list.component.html',
  styleUrls: ['./ratings-list.component.css']
})
export class RatingsListComponent implements OnInit {

  constructor(private ratingsService: RatingsService) { }

  ratingsList: any;
  interval: any;
  test1 = 30;
  ngOnInit() {
    this.refreshData();
    this.interval = setInterval(() => {
      this.refreshData();
    }, 3000);
  }

  refreshData() {
    this.ratingsService.findAll()
    .subscribe((data: any) => this.ratingsList = data.body._embedded.ratings);
  }
}
