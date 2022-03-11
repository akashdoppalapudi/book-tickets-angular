import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DataService } from '../data.service';
import { FilterStatus } from '../models/filter-status.model';
import { Show } from '../models/show.model';

@Component({
  selector: 'app-seats-dropdown',
  templateUrl: './seats-dropdown.component.html',
  styleUrls: ['./seats-dropdown.component.css'],
})
export class SeatsDropdownComponent implements OnInit {
  options: any[] = [];
  filterStatus: any;

  @Input() shows: Show[] = [];

  @Output() seatsSelectedEvent: EventEmitter<FilterStatus> =
    new EventEmitter<FilterStatus>();

  @ViewChild('seatsDropdown') seatsDropdown: any;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {}

  getSeatsOptions(filterStatus: FilterStatus): void {
    this.seatsDropdown.nativeElement.value = '';
    this.filterStatus = filterStatus;
    this.options = this.dataService.getFilterOptions(
      this.shows,
      'seats',
      filterStatus
    );
  }

  onSeatsSelected(element: any): void {
    this.filterStatus.seats = element.value;
    this.seatsSelectedEvent.emit(this.filterStatus);
  }
}
