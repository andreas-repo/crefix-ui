import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreedDetailsFrameComponent } from './screed-details-frame.component';

describe('ScreedDetailsFrameComponent', () => {
  let component: ScreedDetailsFrameComponent;
  let fixture: ComponentFixture<ScreedDetailsFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreedDetailsFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreedDetailsFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
