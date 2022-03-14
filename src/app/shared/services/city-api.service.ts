import { Injectable } from '@angular/core';
import { City } from '../models/city.model';
import cities from '../data/cities.json';

@Injectable({
  providedIn: 'root',
})
export class CityApiService {
  cities: City[] = cities;

  constructor() {}

  getCities(): City[] {
    return this.cities;
  }
}
