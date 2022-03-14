import { ElementRef, Input } from '@angular/core';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { DataService } from '../../services/data.service';
import { FilterStatus } from '../../models/filter-status.model';
import { Show } from '../../models/show.model';

@Component({
  selector: 'app-movie-dropdown',
  templateUrl: './movie-dropdown.component.html',
  styleUrls: ['./movie-dropdown.component.css'],
})
export class MovieDropdownComponent implements OnInit {
  options: any[] = [];
  filterStatus: any;

  @Input() shows: Show[] = [];

  @Output() movieSelectedEvent: EventEmitter<FilterStatus> =
    new EventEmitter<FilterStatus>();

  @ViewChild('movieDropdown') movieDropdown: any;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {}

  getMovieOptions(filterStatus: FilterStatus): void {
    this.movieDropdown.nativeElement.value = '';
    this.filterStatus = filterStatus;
    this.options = this.dataService.getFilterOptions(
      this.shows,
      'movie',
      filterStatus
    );
  }

  onMovieSelected(element: any): void {
    this.filterStatus.movie = element.value;
    this.movieSelectedEvent.emit(this.filterStatus);
  }
}
