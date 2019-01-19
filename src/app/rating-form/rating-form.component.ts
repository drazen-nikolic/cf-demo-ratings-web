import { Component, OnInit } from '@angular/core';
import {RatingsService} from '../ratings.service';
import {Rating} from './rating';


@Component({
  selector: 'app-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.css']
})
export class RatingFormComponent implements OnInit {

  ratingModel = new Rating(0, null, null);

  constructor(private ratingsService: RatingsService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.ratingModel);
    this.ratingsService.save(this.ratingModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.log('Error!', error)
      );
  }

}
