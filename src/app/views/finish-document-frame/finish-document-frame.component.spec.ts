import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishDocumentFrameComponent } from './finish-document-frame.component';

describe('FinishDocumentFrameComponent', () => {
  let component: FinishDocumentFrameComponent;
  let fixture: ComponentFixture<FinishDocumentFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinishDocumentFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishDocumentFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
