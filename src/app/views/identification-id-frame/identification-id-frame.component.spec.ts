import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificationIdFrameComponent } from './identification-id-frame.component';

describe('IdentificationIdFrameComponent', () => {
  let component: IdentificationIdFrameComponent;
  let fixture: ComponentFixture<IdentificationIdFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentificationIdFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentificationIdFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
