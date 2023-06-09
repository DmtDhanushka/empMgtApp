import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMgtComponent } from './employee-mgt.component';

describe('EmployeeMgtComponent', () => {
  let component: EmployeeMgtComponent;
  let fixture: ComponentFixture<EmployeeMgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeMgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeMgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
