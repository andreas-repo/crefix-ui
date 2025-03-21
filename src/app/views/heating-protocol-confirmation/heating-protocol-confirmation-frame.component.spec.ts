import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatingProtocolConfirmationFrameComponent } from './heating-protocol-confirmation-frame.component';

describe('HeatingProtocolConfirmationComponent', () => {
  let component: HeatingProtocolConfirmationFrameComponent;
  let fixture: ComponentFixture<HeatingProtocolConfirmationFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeatingProtocolConfirmationFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatingProtocolConfirmationFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
