import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Rating} from './rating';

@Injectable({
  providedIn: 'root'
})
export class RatingsService {

  private env = environment;
  constructor(private http: HttpClient) { }

  save(rating: Rating) {
    return this.http.post<any>(this.env.ratingsServiceUrl, rating);
  }

  findAll() {
    return this.http.get<Rating[]>(this.env.ratingsServiceUrl, { observe: 'response' });
  }
}
