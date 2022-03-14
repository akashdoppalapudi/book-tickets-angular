import {
  Component,
  Input,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { DataService } from '../../services/data.service';
import alphabets from '../../data/alphabets.json';
import { Show } from '../../models/show.model';

@Component({
  selector: 'app-seat-layout',
  templateUrl: './seat-layout.component.html',
  styleUrls: ['./seat-layout.component.css'],
})
export class SeatLayoutComponent implements OnInit, OnChanges {
  @Input() selectedShow: number = 0;
  @Input() selectedSeatsNumber: number = 0;
  @Input() shows: Show[] = [];

  @Output() onSelectionChange: EventEmitter<string[]> = new EventEmitter<
    string[]
  >();

  show!: Show;
  rows: string[] = alphabets;
  columns: number[] = [];
  selectedSeats: string[] = [];
  isSelectionComplete: boolean = false;

  constructor(public dataService: DataService) {}

  setLayout(): void {
    this.show = this.dataService.getShowDetails(this.shows, this.selectedShow);
    this.rows = this.rows.slice(0, this.show.theatre.layout.rows);
    this.columns = [];
    for (let i = 1; i <= this.show.theatre.layout.columns; i++) {
      this.columns.push(i);
    }
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
