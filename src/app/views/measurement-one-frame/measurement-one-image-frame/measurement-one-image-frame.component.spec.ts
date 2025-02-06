import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementOneImageFrameComponent } from './measurement-one-image-frame.component';

describe('MeasurementOneImageFrameComponent', () => {
  let component: MeasurementOneImageFrameComponent;
  let fixture: ComponentFixture<MeasurementOneImageFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeasurementOneImageFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasurementOneImageFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
