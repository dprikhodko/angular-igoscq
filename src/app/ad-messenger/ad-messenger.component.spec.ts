import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMessengerComponent } from './ad-messenger.component';

describe('AdMessengerComponent', () => {
  let component: AdMessengerComponent;
  let fixture: ComponentFixture<AdMessengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdMessengerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdMessengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
