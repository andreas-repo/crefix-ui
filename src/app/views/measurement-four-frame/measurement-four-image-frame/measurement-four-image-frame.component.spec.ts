import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementFourImageFrameComponent } from './measurement-four-image-frame.component';

describe('MeasurementFourImageFrameComponent', () => {
  let component: MeasurementFourImageFrameComponent;
  let fixture: ComponentFixture<MeasurementFourImageFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeasurementFourImageFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasurementFourImageFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
