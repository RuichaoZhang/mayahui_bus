import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSubjectComponent } from './exam-subject.component';

describe('ExamSubjectComponent', () => {
  let component: ExamSubjectComponent;
  let fixture: ComponentFixture<ExamSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
