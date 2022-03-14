import { ElementRef, Input } from '@angular/core';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DataService } from '../../services/data.service';
import { FilterStatus } from '../../models/filter-status.model';
import { Show } from '../../models/show.model';

@Component({
  selector: 'app-theatre-dropdown',
  templateUrl: './theatre-dropdown.component.html',
  styleUrls: ['./theatre-dropdown.component.css'],
})
export class TheatreDropdownComponent implements OnInit {
  options: any[] = [];
  filterStatus: any;

  @Input() shows: Show[] = [];

  @Output() theatreSelectedEvent: EventEmitter<FilterStatus> =
    new EventEmitter<FilterStatus>();

  @ViewChild('theatreDropdown') theatreDropdown: any;
  constructor(public dataService: DataService) {}

  ngOnInit(): void {}

  onTheatreSelected(element: any): void {
    this.filterStatus.theatre = element.value;
    this.theatreSelectedEvent.emit(this.filterStatus);
  }

  getTheatreOptions(filterStatus: FilterStatus): void {
    this.theatreDropdown.nativeElement.value = '';
    this.filterStatus = filterStatus;
    this.options = this.dataService.getFilterOptions(
      this.shows,
      'theatre',
      filterStatus
    );
  }
}
