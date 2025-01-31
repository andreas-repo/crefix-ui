import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementFourFrameComponent } from './measurement-four-frame.component';

describe('MeasurementFourFrameComponent', () => {
  let component: MeasurementFourFrameComponent;
  let fixture: ComponentFixture<MeasurementFourFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeasurementFourFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasurementFourFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
