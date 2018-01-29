import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JerseyDetailsComponent } from './jersey-details.component';

describe('JerseyDetailsComponent', () => {
  let component: JerseyDetailsComponent;
  let fixture: ComponentFixture<JerseyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JerseyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JerseyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
