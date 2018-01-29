import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JerseyTeamComponent } from './jersey-team.component';

describe('JerseyTeamComponent', () => {
  let component: JerseyTeamComponent;
  let fixture: ComponentFixture<JerseyTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JerseyTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JerseyTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
