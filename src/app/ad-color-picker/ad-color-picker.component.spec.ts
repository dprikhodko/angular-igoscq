import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdColorPickerComponent } from './ad-color-picker.component';

describe('AdColorPickerComponent', () => {
  let component: AdColorPickerComponent;
  let fixture: ComponentFixture<AdColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdColorPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
