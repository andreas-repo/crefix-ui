import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementThreeImageFrameComponent } from './measurement-three-image-frame.component';

describe('MeasurementThreeImageFrameComponent', () => {
  let component: MeasurementThreeImageFrameComponent;
  let fixture: ComponentFixture<MeasurementThreeImageFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeasurementThreeImageFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasurementThreeImageFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
