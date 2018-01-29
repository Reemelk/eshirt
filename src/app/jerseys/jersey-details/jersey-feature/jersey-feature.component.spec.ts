import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JerseyFeatureComponent } from './jersey-feature.component';

describe('JerseyFeatureComponent', () => {
  let component: JerseyFeatureComponent;
  let fixture: ComponentFixture<JerseyFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JerseyFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JerseyFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
