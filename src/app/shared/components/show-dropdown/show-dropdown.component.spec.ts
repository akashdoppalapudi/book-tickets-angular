import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDropdownComponent } from './show-dropdown.component';

describe('ShowDropdownComponent', () => {
  let component: ShowDropdownComponent;
  let fixture: ComponentFixture<ShowDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
