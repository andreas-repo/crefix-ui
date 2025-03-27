import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitePlumberToHpFrameComponent } from './invite-plumber-to-hp-frame.component';

describe('InvitePlumberToHpFrameComponent', () => {
  let component: InvitePlumberToHpFrameComponent;
  let fixture: ComponentFixture<InvitePlumberToHpFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvitePlumberToHpFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitePlumberToHpFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
