import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTextareaComponent } from './ad-textarea.component';

describe('AdTextareaComponent', () => {
  let component: AdTextareaComponent;
  let fixture: ComponentFixture<AdTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdTextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
