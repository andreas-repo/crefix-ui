import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataFrameComponent } from './user-data-frame.component';

describe('UserDataFrameComponent', () => {
  let component: UserDataFrameComponent;
  let fixture: ComponentFixture<UserDataFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDataFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDataFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
