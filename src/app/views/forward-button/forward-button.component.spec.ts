import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardButtonComponent } from './forward-button.component';

describe('ForwardButtonComponent', () => {
  let component: ForwardButtonComponent;
  let fixture: ComponentFixture<ForwardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForwardButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForwardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
