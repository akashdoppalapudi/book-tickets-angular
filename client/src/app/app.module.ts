import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CityDropdownComponent } from './shared/components/city-dropdown/city-dropdown.component';
import { MovieDropdownComponent } from './shared/components/movie-dropdown/movie-dropdown.component';
import { TheatreDropdownComponent } from './shared/components/theatre-dropdown/theatre-dropdown.component';
import { ShowDropdownComponent } from './shared/components/show-dropdown/show-dropdown.component';
import { SeatsDropdownComponent } from './shared/components/seats-dropdown/seats-dropdown.component';
import { SeatLayoutComponent } from './shared/components/seat-layout/seat-layout.component';
import { ShowDescriptionComponent } from './shared/components/show-description/show-description.component';
import { SeatComponent } from './shared/components/seat/seat.component';

@NgModule({
  declarations: [
    AppComponent,
    CityDropdownComponent,
    MovieDropdownComponent,
    TheatreDropdownComponent,
    ShowDropdownComponent,
    SeatsDropdownComponent,
    SeatLayoutComponent,
    ShowDescriptionComponent,
    SeatComponent,
  ],
  imports: [BrowserModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
