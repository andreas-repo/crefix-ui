import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementThreeFrameComponent } from './measurement-three-frame.component';

describe('MeasurementThreeFrameComponent', () => {
  let component: MeasurementThreeFrameComponent;
  let fixture: ComponentFixture<MeasurementThreeFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeasurementThreeFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasurementThreeFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
