import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css'],
})
export class SeatComponent implements OnInit {
  @Input() seatNumber: string = '';
  @Input() isBooked: boolean = false;

  @ViewChild('checkBox') checkBox!: ElementRef;

  isSelected: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSeatClicked() {
    this.isSelected = !this.isSelected;
    console.log(this.seatNumber, this.isSelected);
  }
}
