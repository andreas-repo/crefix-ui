import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoTabComponent } from './logo-tab.component';

describe('LogoTabComponent', () => {
  let component: LogoTabComponent;
  let fixture: ComponentFixture<LogoTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
