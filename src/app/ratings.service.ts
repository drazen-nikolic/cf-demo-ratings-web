import {EventEmitter, Injectable, Output} from '@angular/core';
import { environment } from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Rating} from './rating';

@Injectable({
  providedIn: 'root'
})
export class RatingsService {

  private env = environment;
  @Output() newRatingSavedEvent: EventEmitter<null> = new EventEmitter();

  constructor(private http: HttpClient) { }

  save(rating: Rating): void {
    this.http.post<any>(this.env.ratingsServiceUrl, rating).subscribe(
      null, null, () => this.newRatingSavedEvent.emit()
    );
  }

  findAll() {
    return this.http.get<Rating[]>(this.env.ratingsServiceUrl, { observe: 'response' });
  }
}
