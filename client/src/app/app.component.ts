import { Component, OnInit, ViewChild } from '@angular/core';
import { CityDropdownComponent } from './shared/components/city-dropdown/city-dropdown.component';
import { FilterStatus } from './shared/models/filter-status.model';
import { MovieDropdownComponent } from './shared/components/movie-dropdown/movie-dropdown.component';
import { SeatsDropdownComponent } from './shared/components/seats-dropdown/seats-dropdown.component';
import { ShowDropdownComponent } from './shared/components/show-dropdown/show-dropdown.component';
import { TheatreDropdownComponent } from './shared/components/theatre-dropdown/theatre-dropdown.component';
import { ShowApiService } from './shared/services/show-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'book-tickets';
  filterStatus: FilterStatus = {
    city: 0,
    movie: 0,
    theatre: 0,
    show: 0,
    numberOfSeats: 0,
  };

  selectedSeats: string[] = [];

  @ViewChild(CityDropdownComponent) cityDropdown: any;
  @ViewChild(MovieDropdownComponent) movieDropdown: any;
  @ViewChild(TheatreDropdownComponent) theatreDropdown: any;
  @ViewChild(ShowDropdownComponent) showDropdown: any;
  @ViewChild(SeatsDropdownComponent) seatsDropdown: any;

  constructor(public showApiService: ShowApiService) {}

  ngOnInit(): void {
    this.showApiService.storeShowsToLocalStorage();
  }

  onCitySelection(event: number): void {
    this.filterStatus.city = event;
    this.movieDropdown.getMovieOptions(this.filterStatus.city);
  }

  onMovieSelection(event: number): void {
    this.filterStatus.movie = event;
    this.theatreDropdown.getTheatreOptions(
      this.filterStatus.city,
      this.filterStatus.movie
    );
  }

  onTheatreSelection(event: number): void {
    this.filterStatus.theatre = event;
    this.showDropdown.getShowOptions(
      this.filterStatus.theatre,
      this.filterStatus.movie
    );
  }

  onShowSelection(event: number): void {
    this.filterStatus.show = event;
    this.seatsDropdown.getSeatsOptions(this.filterStatus.theatre);
  }

  onSeatsSelection(event: number): void {
    this.filterStatus.numberOfSeats = event;
  }

  updateSelectedSeats(event: string[]): void {
    this.selectedSeats = event;
  }

  onSeatsSubmit(): void {
    this.showApiService.updateBookings(
      this.filterStatus.show,
      this.selectedSeats
    );
    this.cityDropdown.setDefault();
    this.onCitySelection(0);
    this.onMovieSelection(0);
    this.onTheatreSelection(0);
    this.onShowSelection(0);
    this.onSeatsSelection(0);
  }
}
