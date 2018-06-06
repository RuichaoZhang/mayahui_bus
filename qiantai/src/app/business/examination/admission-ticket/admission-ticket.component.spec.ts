import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionTicketComponent } from './admission-ticket.component';

describe('AdmissionTicketComponent', () => {
  let component: AdmissionTicketComponent;
  let fixture: ComponentFixture<AdmissionTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
