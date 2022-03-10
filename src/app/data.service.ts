import { Injectable } from '@angular/core';
import { FilterStatus } from './models/filter-status.model';
import { Show } from './models/show.model';
import { Theatre } from './models/theatre.model';
import showsData from './shows.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  shows: Show[] = showsData;

  getFilterOptions(filter: string, filterStatus: FilterStatus): any[] {
    let options: any[] = [];
    if (filter === 'city') {
      this.shows.forEach((show) => {
        if (!options.includes(show.theatre.city)) {
          options.push(show.theatre.city);
        }
      });
    } else if (filter === 'movie') {
      this.shows.forEach((show) => {
        if (show.theatre.city === filterStatus.city) {
          if (!options.includes(show.movie)) {
            options.push(show.movie);
          }
        }
      });
    } else if (filter === 'theatre') {
      this.shows.forEach((show) => {
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
      this.shows.forEach((show) => {
        if (
          show.movie === filterStatus.movie &&
          show.theatre.name === filterStatus.theatre
        ) {
          options.push({ id: show.id, name: show.name });
        }
      });
    } else if (filter === 'seats') {
      let theatre: any = this.shows.find(
        (show) => show.id == filterStatus.show
      )?.theatre;
      for (let i = 1; i <= theatre.maxSeats; i++) {
        options.push(i);
      }
    }
    return options;
  }

  getShowDetails(id: number): any {
    return this.shows.find((show) => show.id == id);
  }
}
