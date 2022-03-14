import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreDropdownComponent } from './theatre-dropdown.component';

describe('TheatreDropdownComponent', () => {
  let component: TheatreDropdownComponent;
  let fixture: ComponentFixture<TheatreDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheatreDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatreDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
