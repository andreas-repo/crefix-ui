import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementOneFrameComponent } from './measurement-one-frame.component';

describe('DocumentsFrameComponent', () => {
  let component: MeasurementOneFrameComponent;
  let fixture: ComponentFixture<MeasurementOneFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeasurementOneFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasurementOneFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
