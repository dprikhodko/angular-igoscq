import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdRichTextComponent } from './ad-rich-text.component';

describe('AdRichTextComponent', () => {
  let component: AdRichTextComponent;
  let fixture: ComponentFixture<AdRichTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdRichTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdRichTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
