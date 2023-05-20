import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputErrorsExampleComponent } from './input-errors-example.component';

describe('InputErrorsExampleComponent', () => {
  let component: InputErrorsExampleComponent;
  let fixture: ComponentFixture<InputErrorsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputErrorsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputErrorsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
