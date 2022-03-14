import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieApiService } from '../../services/movie-api.service';

@Component({
  selector: 'app-movie-dropdown',
  templateUrl: './movie-dropdown.component.html',
  styleUrls: ['./movie-dropdown.component.css'],
})
export class MovieDropdownComponent implements OnInit {
  options: Movie[] = [];

  @Output() movieSelectedEvent: EventEmitter<number> =
    new EventEmitter<number>();

  @ViewChild('movieDropdown') movieDropdown: any;

  constructor(public movieApiService: MovieApiService) {}

  ngOnInit(): void {}

  getMovieOptions(cityId: number): void {
    this.movieDropdown.nativeElement.value = 0;
    this.options = this.movieApiService.getMovies(cityId);
  }

  onMovieSelected(element: any): void {
    this.movieSelectedEvent.emit(element.value);
  }
}
