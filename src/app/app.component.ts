import { Component, ViewChild } from '@angular/core';
import { CityDropdownComponent } from './city-dropdown/city-dropdown.component';
import { FilterStatus } from './models/filter-status.model';
import { MovieDropdownComponent } from './movie-dropdown/movie-dropdown.component';
import { SeatsDropdownComponent } from './seats-dropdown/seats-dropdown.component';
import { ShowDropdownComponent } from './show-dropdown/show-dropdown.component';
import { TheatreDropdownComponent } from './theatre-dropdown/theatre-dropdown.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'book-tickets';

  selectedShow: number = 0;
  selectedSeatsNumber: number = 0;
  selectedSeats: string[] = [];

  @ViewChild(CityDropdownComponent) cityDropdown: any;
  @ViewChild(MovieDropdownComponent) movieDropdown: any;
  @ViewChild(TheatreDropdownComponent) theatreDropdown: any;
  @ViewChild(ShowDropdownComponent) showDropdown: any;
  @ViewChild(SeatsDropdownComponent) seatsDropdown: any;

  onCitySelection(event: FilterStatus): void {
    this.selectedShow = 0;
    this.selectedSeatsNumber = 0;
    this.movieDropdown.getMovieOptions(event);
  }

  onMovieSelection(event: FilterStatus): void {
    this.selectedShow = 0;
    this.selectedSeatsNumber = 0;
    this.theatreDropdown.getTheatreOptions(event);
  }

  onTheatreSelection(event: FilterStatus): void {
    this.selectedShow = 0;
    this.selectedSeatsNumber = 0;
    this.showDropdown.getShowOptions(event);
  }

  onShowSelection(event: FilterStatus): void {
    this.selectedShow = event.show;
    this.selectedSeatsNumber = 0;
    this.seatsDropdown.getSeatsOptions(event);
  }

  onSeatsSelection(event: FilterStatus): void {
    this.selectedSeatsNumber = event.seats;
  }

  updateSelectedSeats(event: string[]): void {
    this.selectedSeats = event;
  }

  onSeatsSubmit(): void {
    let emptyFilterStatus: FilterStatus = {
      city: '',
      movie: '',
      theatre: '',
      show: 0,
      seats: 0,
    };
    this.cityDropdown.setDefault();
    this.onCitySelection(emptyFilterStatus);
    this.onMovieSelection(emptyFilterStatus);
    this.onTheatreSelection(emptyFilterStatus);
    this.onShowSelection(emptyFilterStatus);
    this.onSeatsSelection(emptyFilterStatus);
  }
}
