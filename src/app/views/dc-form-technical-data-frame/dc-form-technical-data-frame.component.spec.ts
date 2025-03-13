import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcFormTechnicalDataFrameComponent } from './dc-form-technical-data-frame.component';

describe('DcFormTechnicalDataFrameComponent', () => {
  let component: DcFormTechnicalDataFrameComponent;
  let fixture: ComponentFixture<DcFormTechnicalDataFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DcFormTechnicalDataFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcFormTechnicalDataFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
