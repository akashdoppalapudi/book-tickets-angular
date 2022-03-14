import { Injectable } from '@angular/core';
import theatresData from '../data/theatres.json';
import { Show } from '../models/show.model';
import { Theatre } from '../models/theatre.model';
import { ShowApiService } from './show-api.service';

@Injectable({
  providedIn: 'root',
})
export class TheatreApiService {
  theatres: Theatre[] = theatresData;

  constructor(public showApiService: ShowApiService) {}

  getTheatreById(id: number): Theatre {
    return this.theatres.filter((theatre) => {
      theatre.id == id;
    })[0];
  }

  getTheatres(cityId: number, movieId: number): Theatre[] {
    let shortlistedTheatreIds: number[] = [];
    let shows: Show[] = this.showApiService.getShowsFromLocalStorage();

    shows.forEach((show) => {
      let theatre: Theatre = this.getTheatreById(show.theatreId);
      if (
        theatre.cityId == cityId &&
        show.movieId == movieId &&
        !shortlistedTheatreIds.includes(show.theatreId)
      ) {
        shortlistedTheatreIds.push(show.theatreId);
      }
    });

    return this.theatres.filter(
      (theatre) => theatre.id in shortlistedTheatreIds
    );
  }
}
