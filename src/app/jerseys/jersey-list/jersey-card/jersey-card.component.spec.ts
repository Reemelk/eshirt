import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JerseyCardComponent } from './jersey-card.component';

describe('JerseyCardComponent', () => {
  let component: JerseyCardComponent;
  let fixture: ComponentFixture<JerseyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JerseyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JerseyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
