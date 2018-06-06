import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterInfoManageComponent } from './register-info-manage.component';

describe('RegisterInfoManageComponent', () => {
  let component: RegisterInfoManageComponent;
  let fixture: ComponentFixture<RegisterInfoManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterInfoManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterInfoManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
