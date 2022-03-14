import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Show } from '../models/show.model';
import { Theatre } from '../models/theatre.model';
import { TheatreApiService } from './theatre-api.service';

import moviesData from '../data/movies.json';
import { ShowApiService } from './show-api.service';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  movies: Movie[] = moviesData;

  constructor(
    public showApiService: ShowApiService,
    public theatreApiService: TheatreApiService
  ) {}

  getMovies(cityId: number): Movie[] {
    let shortlistedMovieIds: number[] = [];
    let shows: Show[] = this.showApiService.getShowsFromLocalStorage();

    shows.forEach((show) => {
      let theatre: Theatre = this.theatreApiService.getTheatreById(
        show.theatreId
      );
      if (
        theatre.cityId == cityId &&
        !shortlistedMovieIds.includes(show.movieId)
      ) {
        shortlistedMovieIds.push(show.movieId);
      }
    });

    return this.movies.filter((movie) => movie.id in shortlistedMovieIds);
  }
}
