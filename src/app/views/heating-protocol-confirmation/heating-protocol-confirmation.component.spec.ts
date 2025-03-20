import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatingProtocolConfirmationComponent } from './heating-protocol-confirmation.component';

describe('HeatingProtocolConfirmationComponent', () => {
  let component: HeatingProtocolConfirmationComponent;
  let fixture: ComponentFixture<HeatingProtocolConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeatingProtocolConfirmationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatingProtocolConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
