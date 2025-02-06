import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementTwoImageFrameComponent } from './measurement-two-image-frame.component';

describe('MeasurementTwoImageFrameComponent', () => {
  let component: MeasurementTwoImageFrameComponent;
  let fixture: ComponentFixture<MeasurementTwoImageFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeasurementTwoImageFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasurementTwoImageFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
