import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillMgtComponent } from './skill-mgt.component';

describe('SkillMgtComponent', () => {
  let component: SkillMgtComponent;
  let fixture: ComponentFixture<SkillMgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillMgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillMgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
