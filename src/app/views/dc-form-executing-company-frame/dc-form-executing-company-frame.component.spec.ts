import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcFormExecutingCompanyFrameComponent } from './dc-form-executing-company-frame.component';

describe('DcFormExecutingCompanyFrameComponent', () => {
  let component: DcFormExecutingCompanyFrameComponent;
  let fixture: ComponentFixture<DcFormExecutingCompanyFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DcFormExecutingCompanyFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcFormExecutingCompanyFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
