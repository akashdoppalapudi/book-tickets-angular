import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { DataService } from '../data.service';
import alphabets from '../alphabets.json';

@Component({
  selector: 'app-seat-layout',
  templateUrl: './seat-layout.component.html',
  styleUrls: ['./seat-layout.component.css'],
})
export class SeatLayoutComponent implements OnInit, OnChanges {
  @Input() selectedShow: number = 0;
  @Input() selectedSeatsNumber: number = 0;
  show: any;
  rows: string[] = alphabets;
  columns: number[] = [];

  constructor(public dataService: DataService) {}

  setLayout(): void {
    this.show = this.dataService.getShowDetails(this.selectedShow);
    this.rows = this.rows.slice(0, this.show.theatre.layout.rows);
    this.columns = [];
    for (let i = 1; i <= this.show.theatre.layout.columns; i++) {
      this.columns.push(i);
    }
    console.log(this.columns);
  }

  ngOnInit(): void {
    this.setLayout();
  }

  ngOnChanges(): void {
    this.setLayout();
  }
}
