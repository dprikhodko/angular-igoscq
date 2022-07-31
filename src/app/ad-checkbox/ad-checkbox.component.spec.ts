import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCheckboxComponent } from './ad-checkbox.component';

describe('AdCheckboxComponent', () => {
  let component: AdCheckboxComponent;
  let fixture: ComponentFixture<AdCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
