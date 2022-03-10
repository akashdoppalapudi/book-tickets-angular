import { ElementRef } from '@angular/core';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { DataService } from '../data.service';
import { FilterStatus } from '../models/filter-status.model';

@Component({
  selector: 'app-movie-dropdown',
  templateUrl: './movie-dropdown.component.html',
  styleUrls: ['./movie-dropdown.component.css'],
})
export class MovieDropdownComponent implements OnInit {
  options: any[] = [];
  filterStatus: any;

  @Output() movieSelectedEvent: EventEmitter<FilterStatus> =
    new EventEmitter<FilterStatus>();

  @ViewChild('movieDropdown') movieDropdown: any;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {}

  getMovieOptions(filterStatus: FilterStatus): void {
    this.movieDropdown.nativeElement.value = '';
    this.filterStatus = filterStatus;
    this.options = this.dataService.getFilterOptions('movie', filterStatus);
  }

  onMovieSelected(element: any): void {
    this.filterStatus.movie = element.value;
    this.movieSelectedEvent.emit(this.filterStatus);
  }
}
