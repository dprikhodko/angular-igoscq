import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdRadiosComponent } from './ad-radios.component';

describe('AdRadiosComponent', () => {
  let component: AdRadiosComponent;
  let fixture: ComponentFixture<AdRadiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdRadiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
