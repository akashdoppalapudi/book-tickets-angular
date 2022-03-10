import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CityDropdownComponent } from './city-dropdown/city-dropdown.component';
import { MovieDropdownComponent } from './movie-dropdown/movie-dropdown.component';
import { TheatreDropdownComponent } from './theatre-dropdown/theatre-dropdown.component';
import { ShowDropdownComponent } from './show-dropdown/show-dropdown.component';
import { SeatsDropdownComponent } from './seats-dropdown/seats-dropdown.component';

@NgModule({
  declarations: [AppComponent, CityDropdownComponent, MovieDropdownComponent, TheatreDropdownComponent, ShowDropdownComponent, SeatsDropdownComponent],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
