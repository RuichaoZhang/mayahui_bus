import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineQueryComponent } from './line-query.component';

describe('LineQueryComponent', () => {
  let component: LineQueryComponent;
  let fixture: ComponentFixture<LineQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
