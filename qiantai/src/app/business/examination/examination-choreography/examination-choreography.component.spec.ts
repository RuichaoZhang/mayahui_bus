import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationChoreographyComponent } from './examination-choreography.component';

describe('ExaminationChoreographyComponent', () => {
  let component: ExaminationChoreographyComponent;
  let fixture: ComponentFixture<ExaminationChoreographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaminationChoreographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationChoreographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
