import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationPointComponent } from './station-point.component';

describe('StationPointComponent', () => {
  let component: StationPointComponent;
  let fixture: ComponentFixture<StationPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
