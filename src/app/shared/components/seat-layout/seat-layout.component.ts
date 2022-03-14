import {
  Component,
  Input,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { Seat } from '../../models/seat.model';
import { Show } from '../../models/show.model';
import { Theatre } from '../../models/theatre.model';
import { ShowApiService } from '../../services/show-api.service';
import { TheatreApiService } from '../../services/theatre-api.service';

@Component({
  selector: 'app-seat-layout',
  templateUrl: './seat-layout.component.html',
  styleUrls: ['./seat-layout.component.css'],
})
export class SeatLayoutComponent implements OnInit, OnChanges {
  @Input() selectedShow: number = 0;
  @Input() selectedSeatsNumber: number = 0;

  @Output() onSelectionChange: EventEmitter<string[]> = new EventEmitter<
    string[]
  >();

  show!: Show;
  layout!: Seat[][];
  selectedSeats: string[] = [];
  isSelectionComplete: boolean = false;

  constructor(
    public showApiService: ShowApiService,
    public theatreApiService: TheatreApiService
  ) {}

  setLayout(): void {
    this.show = this.showApiService.getShowById(this.selectedShow);
    let theatre: Theatre = this.theatreApiService.getTheatreById(
      this.show.theatreId
    );
    this.layout = theatre.layout.layout;
    console.log(theatre.layout);
  }

  ngOnInit(): void {
    this.setLayout();
  }

  ngOnChanges(): void {
    this.setLayout();
    this.isSelectionComplete = false;
  }

  addSeatToSelection(event: string): void {
    this.selectedSeats.push(event);
    this.onSelectionChange.emit(this.selectedSeats);
    if (this.selectedSeats.length == this.selectedSeatsNumber) {
      this.isSelectionComplete = true;
    }
  }

  removeSeatFromSelection(event: string): void {
    this.selectedSeats.splice(this.selectedSeats.indexOf(event), 1);
    this.onSelectionChange.emit(this.selectedSeats);
    this.isSelectionComplete = false;
  }
}
