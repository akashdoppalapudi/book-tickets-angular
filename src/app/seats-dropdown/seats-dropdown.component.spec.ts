import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsDropdownComponent } from './seats-dropdown.component';

describe('SeatsDropdownComponent', () => {
  let component: SeatsDropdownComponent;
  let fixture: ComponentFixture<SeatsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatsDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
