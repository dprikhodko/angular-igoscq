import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSettingSectionComponent } from './ad-setting-section.component';

describe('AdSettingSectionComponent', () => {
  let component: AdSettingSectionComponent;
  let fixture: ComponentFixture<AdSettingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdSettingSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdSettingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
