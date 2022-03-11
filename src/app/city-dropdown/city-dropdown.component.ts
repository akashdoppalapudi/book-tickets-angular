import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  Input,
} from '@angular/core';
import { DataService } from '../data.service';
import { FilterStatus } from '../models/filter-status.model';
import { Show } from '../models/show.model';

@Component({
  selector: 'app-city-dropdown',
  templateUrl: './city-dropdown.component.html',
  styleUrls: ['./city-dropdown.component.css'],
})
export class CityDropdownComponent implements OnInit {
  options: any[] = [];
  filterStatus: FilterStatus = {
    city: '',
    movie: '',
    theatre: '',
    show: 0,
    seats: 0,
  };

  @Input() shows: Show[] = [];

  @Output() citySelectedEvent: EventEmitter<FilterStatus> =
    new EventEmitter<FilterStatus>();

  @ViewChild('cityDropdown') cityDropdown: any;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.options = this.dataService.getFilterOptions(
      this.shows,
      'city',
      this.filterStatus
    );
  }

  setDefault(): void {
    this.cityDropdown.nativeElement.value = '';
  }

  onCitySelected(element: any): void {
    this.filterStatus.city = element.value;
    this.citySelectedEvent.emit(this.filterStatus);
  }
}
