import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';
import { FilterStatus } from '../models/filter-status.model';

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

  @Output() citySelectedEvent: EventEmitter<FilterStatus> =
    new EventEmitter<FilterStatus>();

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.options = this.dataService.getFilterOptions('city', this.filterStatus);
  }

  onCitySelected(element: any): void {
    this.filterStatus.city = element.value;
    this.citySelectedEvent.emit(this.filterStatus);
  }
}
