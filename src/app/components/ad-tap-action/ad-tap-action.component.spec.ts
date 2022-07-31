import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTapActionComponent } from './ad-tap-action.component';

describe('AdTapActionComponent', () => {
  let component: AdTapActionComponent;
  let fixture: ComponentFixture<AdTapActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdTapActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdTapActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
