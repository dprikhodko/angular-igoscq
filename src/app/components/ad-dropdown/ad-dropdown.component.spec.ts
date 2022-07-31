import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdDropdownComponent } from './ad-dropdown.component';

describe('AdDropdownComponent', () => {
  let component: AdDropdownComponent;
  let fixture: ComponentFixture<AdDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
