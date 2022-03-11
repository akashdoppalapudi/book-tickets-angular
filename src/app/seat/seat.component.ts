import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css'],
})
export class SeatComponent implements OnInit {
  @Input() seatNumber: string = '';
  @Input() isBooked: boolean = false;
  @Input() isSelectionComplete: boolean = false;

  @ViewChild('checkBox') checkBox!: ElementRef;

  isSelected: boolean = false;

  @Output() onSeatSelected: EventEmitter<string> = new EventEmitter<string>();
  @Output() onSeatDeSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSeatClicked() {
    this.isSelected = !this.isSelected;
    if (this.isSelected) {
      this.onSeatSelected.emit(this.seatNumber);
    } else {
      this.onSeatDeSelected.emit(this.seatNumber);
    }
  }
}
