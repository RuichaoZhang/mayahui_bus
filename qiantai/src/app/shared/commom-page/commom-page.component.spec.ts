import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommomPageComponent } from './commom-page.component';

describe('CommomPageComponent', () => {
  let component: CommomPageComponent;
  let fixture: ComponentFixture<CommomPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommomPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
