import { Injectable } from '@angular/core';
import { City } from '../models/city.model';
import citiesData from '../data/cities.json';

@Injectable({
  providedIn: 'root',
})
export class CityApiService {
  cities: City[] = citiesData;

  constructor() {}

  getCities(): City[] {
    return this.cities;
  }

  getCityById(id: number): City {
    return this.cities.filter((city) => city.id == id)[0];
  }
}
