import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationLineComponent } from './station-line.component';

describe('StationLineComponent', () => {
  let component: StationLineComponent;
  let fixture: ComponentFixture<StationLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
