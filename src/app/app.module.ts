import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RatingFormComponent } from './rating-form/rating-form.component';
import { RatingsListComponent } from './ratings-list/ratings-list.component';
import {RatingsService} from './ratings.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RatingFormComponent,
    RatingsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RatingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
