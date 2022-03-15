import { Injectable } from '@angular/core';
import { FilterStatus } from '../models/filter-status.model';
import { Show } from '../models/show.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getFilterOptions(
    shows: Show[],
    filter: string,
    filterStatus: FilterStatus
  ): any[] {
    let options: any[] = [];
    if (filter === 'city') {
      shows.forEach((show) => {
        if (!options.includes(show.theatre.city)) {
          options.push(show.theatre.city);
        }
      });
    } else if (filter === 'movie') {
      shows.forEach((show) => {
        if (show.theatre.city === filterStatus.city) {
          if (!options.includes(show.movie)) {
            options.push(show.movie);
          }
        }
      });
    } else if (filter === 'theatre') {
      shows.forEach((show) => {
        if (show.movie === filterStatus.movie) {
          if (
            show.theatre.city === filterStatus.city &&
            !options.includes(show.theatre.name)
          ) {
            options.push(show.theatre.name);
          }
        }
      });
    } else if (filter === 'show') {
      shows.forEach((show) => {
        if (
          show.movie === filterStatus.movie &&
          show.theatre.name === filterStatus.theatre
        ) {
          options.push({ id: show.id, name: show.name });
        }
      });
    } else if (filter === 'seats') {
      let theatre: any = shows.find(
        (show) => show.id == filterStatus.show
      )?.theatre;
      for (let i = 1; i <= theatre.maxSeats; i++) {
        options.push(i);
      }
    }
    return options;
  }

  getShowDetails(shows: Show[], id: number): any {
    return shows.find((show) => show.id == id);
  }
}
