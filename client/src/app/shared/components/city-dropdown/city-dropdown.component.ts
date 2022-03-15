import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { CityApiService } from '../../services/city-api.service';
import { City } from '../../models/city.model';

@Component({
  selector: 'app-city-dropdown',
  templateUrl: './city-dropdown.component.html',
  styleUrls: ['./city-dropdown.component.css'],
})
export class CityDropdownComponent implements OnInit {
  options: City[] = [];

  @Output() citySelectedEvent: EventEmitter<number> =
    new EventEmitter<number>();

  @ViewChild('cityDropdown') cityDropdown: any;

  constructor(public cityApiService: CityApiService) {}

  ngOnInit(): void {
    this.cityApiService.getCities().subscribe((data: City[]) => {
      this.options = data;
    });
  }

  setDefault(): void {
    this.cityDropdown.nativeElement.value = 0;
  }

  onCitySelected(element: any): void {
    this.citySelectedEvent.emit(element.value);
  }
}
