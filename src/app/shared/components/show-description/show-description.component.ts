import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { City } from '../../models/city.model';
import { Movie } from '../../models/movie.model';
import { Show } from '../../models/show.model';
import { Theatre } from '../../models/theatre.model';
import { CityApiService } from '../../services/city-api.service';
import { MovieApiService } from '../../services/movie-api.service';
import { ShowApiService } from '../../services/show-api.service';
import { TheatreApiService } from '../../services/theatre-api.service';

@Component({
  selector: 'app-show-description',
  templateUrl: './show-description.component.html',
  styleUrls: ['./show-description.component.css'],
})
export class ShowDescriptionComponent implements OnInit, OnChanges {
  @Input() selectedShow: number = 0;
  city: string = '';
  theatre: string = '';
  movie: string = '';
  showName: string = '';
  showTime: string = '';

  constructor(
    public showApiService: ShowApiService,
    public theatreApiService: TheatreApiService,
    public movieApiService: MovieApiService,
    public cityApiService: CityApiService
  ) {}

  fetchDisplayInformation(): void {
    let show: Show = this.showApiService.getShowById(this.selectedShow);
    let movie: Movie = this.movieApiService.getMovieById(show.movieId);
    let theatre: Theatre = this.theatreApiService.getTheatreById(
      show.theatreId
    );
    let city: City = this.cityApiService.getCityById(theatre.cityId);
    this.showName = show.name;
    this.showTime = show.time;
    this.movie = movie.name;
    this.city = city.name;
    this.theatre = theatre.name;
  }

  ngOnInit(): void {
    this.fetchDisplayInformation();
  }

  ngOnChanges(): void {
    this.fetchDisplayInformation();
  }
}
