import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Show } from '../../models/show.model';
import { ShowApiService } from '../../services/show-api.service';

@Component({
  selector: 'app-show-dropdown',
  templateUrl: './show-dropdown.component.html',
  styleUrls: ['./show-dropdown.component.css'],
})
export class ShowDropdownComponent implements OnInit {
  options: Show[] = [];

  @Output() showSelectedEvent: EventEmitter<number> =
    new EventEmitter<number>();

  @ViewChild('showDropdown') showDropdown: any;

  constructor(public showApiService: ShowApiService) {}

  ngOnInit(): void {}

  getShowOptions(theatreId: number, movieId: number): void {
    this.showDropdown.nativeElement.value = 0;
    this.options = this.showApiService.getShows(theatreId, movieId);
  }

  onShowSelected(element: any): void {
    this.showSelectedEvent.emit(element.value);
  }
}
