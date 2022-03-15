import { Injectable } from '@angular/core';
import { City } from '../models/city.model';
import citiesData from '../data/cities.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityApiService {
  cities: City[] = citiesData;

  constructor(private http: HttpClient) {}

  getCities(): Observable<any> {
    return this.http.get('http://localhost:3000/city');
  }

  getCityById(id: number): City {
    return this.cities.filter((city) => city.id == id)[0];
  }
}
