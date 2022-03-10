import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DataService } from '../data.service';
import { FilterStatus } from '../models/filter-status.model';

@Component({
  selector: 'app-show-dropdown',
  templateUrl: './show-dropdown.component.html',
  styleUrls: ['./show-dropdown.component.css'],
})
export class ShowDropdownComponent implements OnInit {
  options: any[] = [];
  filterStatus: any;

  @Output() showSelectedEvent: EventEmitter<FilterStatus> =
    new EventEmitter<FilterStatus>();

  @ViewChild('showDropdown') showDropdown: any;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {}

  getShowOptions(filterStatus: FilterStatus): void {
    this.showDropdown.nativeElement.value = '';
    this.filterStatus = filterStatus;
    this.options = this.dataService.getFilterOptions('show', filterStatus);
  }

  onShowSelected(element: any): void {
    this.filterStatus.show = element.value;
    this.showSelectedEvent.emit(this.filterStatus);
  }
}
