import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTextInputComponent } from './ad-text-input.component';

describe('AdTextInputComponent', () => {
  let component: AdTextInputComponent;
  let fixture: ComponentFixture<AdTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdTextInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
