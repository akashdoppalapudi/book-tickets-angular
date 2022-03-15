import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Theatre } from '../../models/theatre.model';
import { TheatreApiService } from '../../services/theatre-api.service';

@Component({
  selector: 'app-theatre-dropdown',
  templateUrl: './theatre-dropdown.component.html',
  styleUrls: ['./theatre-dropdown.component.css'],
})
export class TheatreDropdownComponent implements OnInit {
  options: Theatre[] = [];

  @Output() theatreSelectedEvent: EventEmitter<number> =
    new EventEmitter<number>();

  @ViewChild('theatreDropdown') theatreDropdown: any;
  constructor(public theatreApiService: TheatreApiService) {}

  ngOnInit(): void {}

  onTheatreSelected(element: any): void {
    this.theatreSelectedEvent.emit(element.value);
  }

  getTheatreOptions(cityId: number, movieId: number): void {
    this.theatreDropdown.nativeElement.value = 0;
    this.options = this.theatreApiService.getTheatres(cityId, movieId);
  }
}
