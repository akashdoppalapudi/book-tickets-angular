import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-show-description',
  templateUrl: './show-description.component.html',
  styleUrls: ['./show-description.component.css'],
})
export class ShowDescriptionComponent implements OnInit, OnChanges {
  @Input() selectedShow: number = 0;
  show: any;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.show = this.dataService.getShowDetails(this.selectedShow);
  }

  ngOnChanges(): void {
    this.show = this.dataService.getShowDetails(this.selectedShow);
  }
}
