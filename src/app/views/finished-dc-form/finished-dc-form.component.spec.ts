import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedDcFormComponent } from './finished-dc-form.component';

describe('FinishedDcFormComponent', () => {
  let component: FinishedDcFormComponent;
  let fixture: ComponentFixture<FinishedDcFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinishedDcFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishedDcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
