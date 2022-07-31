import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdLogoComponent } from './ad-logo.component';

describe('AdLogoComponent', () => {
  let component: AdLogoComponent;
  let fixture: ComponentFixture<AdLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
