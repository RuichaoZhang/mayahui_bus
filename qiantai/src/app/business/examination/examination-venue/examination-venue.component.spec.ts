import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationVenueComponent } from './examination-venue.component';

describe('ExaminationVenueComponent', () => {
  let component: ExaminationVenueComponent;
  let fixture: ComponentFixture<ExaminationVenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaminationVenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
