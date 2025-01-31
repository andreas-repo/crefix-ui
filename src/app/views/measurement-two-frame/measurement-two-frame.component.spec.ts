import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementTwoFrameComponent } from './measurement-two-frame.component';

describe('MeasurementTwoFrameComponent', () => {
  let component: MeasurementTwoFrameComponent;
  let fixture: ComponentFixture<MeasurementTwoFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeasurementTwoFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasurementTwoFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
