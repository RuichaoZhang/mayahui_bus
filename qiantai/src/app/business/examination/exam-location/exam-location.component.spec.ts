import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamLocationComponent } from './exam-location.component';

describe('ExamLocationComponent', () => {
  let component: ExamLocationComponent;
  let fixture: ComponentFixture<ExamLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
