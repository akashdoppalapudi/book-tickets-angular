import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Show } from '../../models/show.model';
import { Theatre } from '../../models/theatre.model';
import { TheatreApiService } from '../../services/theatre-api.service';

@Component({
  selector: 'app-seats-dropdown',
  templateUrl: './seats-dropdown.component.html',
  styleUrls: ['./seats-dropdown.component.css'],
})
export class SeatsDropdownComponent implements OnInit {
  options: number[] = [];
  filterStatus: any;

  @Input() shows: Show[] = [];

  @Output() seatsSelectedEvent: EventEmitter<number> =
    new EventEmitter<number>();

  @ViewChild('seatsDropdown') seatsDropdown: any;

  constructor(public theatreApiService: TheatreApiService) {}

  ngOnInit(): void {}

  getSeatsOptions(theatreId: number): void {
    this.seatsDropdown.nativeElement.value = 0;
    this.seatsSelectedEvent.emit(0);
    this.options = [];
    let theatre: Theatre = this.theatreApiService.getTheatreById(theatreId);
    for (let i = 1; i <= theatre.maxSeats; i++) {
      this.options.push(i);
    }
  }

  onSeatsSelected(element: any): void {
    this.seatsSelectedEvent.emit(element.value);
  }
}
