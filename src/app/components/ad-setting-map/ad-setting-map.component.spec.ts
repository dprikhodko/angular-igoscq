import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSettingMapComponent } from './ad-setting-map.component';

describe('AdSettingMapComponent', () => {
  let component: AdSettingMapComponent;
  let fixture: ComponentFixture<AdSettingMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdSettingMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdSettingMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
