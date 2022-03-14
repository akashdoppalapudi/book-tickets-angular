import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Show } from '../../models/show.model';

@Component({
  selector: 'app-show-description',
  templateUrl: './show-description.component.html',
  styleUrls: ['./show-description.component.css'],
})
export class ShowDescriptionComponent implements OnInit, OnChanges {
  @Input() selectedShow: number = 0;
  @Input() shows: Show[] = [];
  show: any;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.show = this.dataService.getShowDetails(this.shows, this.selectedShow);
  }

  ngOnChanges(): void {
    this.show = this.dataService.getShowDetails(this.shows, this.selectedShow);
  }
}
