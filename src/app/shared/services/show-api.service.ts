import { Injectable } from '@angular/core';
import shows from '../data/shows.json';
import { Show } from '../models/show.model';

@Injectable({
  providedIn: 'root',
})
export class ShowApiService {
  constructor() {}

  storeShowsToLocalStorage() {
    localStorage.setItem('shows', JSON.stringify(shows));
  }

  getShowsFromLocalStorage(): Show[] {
    let response: string | null = localStorage.getItem('shows');
    if (response == null) {
      return [];
    }
    let shows: Show[] = JSON.parse(response);
    return shows;
  }

  getShows(theatreId: number, movieId: number) {
    let shows: Show[] = this.getShowsFromLocalStorage();
    let shortlistedShowIds: number[] = [];
    shows.forEach((show) => {
      if (
        show.movieId == movieId &&
        show.theatreId == theatreId &&
        !shortlistedShowIds.includes(show.id)
      ) {
        shortlistedShowIds.push(show.id);
      }
    });

    return shows.filter((show) => show.id in shortlistedShowIds);
  }

  getShowById(id: number): Show {
    let shows: Show[] = this.getShowsFromLocalStorage();
    return shows.filter((show) => show.id == id)[0];
  }
}
