import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDropdownComponent } from './movie-dropdown.component';

describe('MovieDropdownComponent', () => {
  let component: MovieDropdownComponent;
  let fixture: ComponentFixture<MovieDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
