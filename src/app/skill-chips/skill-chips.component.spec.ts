import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillChipsComponent } from './skill-chips.component';

describe('SkillChipsComponent', () => {
  let component: SkillChipsComponent;
  let fixture: ComponentFixture<SkillChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillChipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
