import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeImageFrameComponent } from './take-image-frame.component';

describe('TakeImageFrameComponent', () => {
  let component: TakeImageFrameComponent;
  let fixture: ComponentFixture<TakeImageFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakeImageFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeImageFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
