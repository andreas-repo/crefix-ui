import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSiteFrameComponent } from './job-site-frame.component';

describe('JobSiteFrameComponent', () => {
  let component: JobSiteFrameComponent;
  let fixture: ComponentFixture<JobSiteFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSiteFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSiteFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
