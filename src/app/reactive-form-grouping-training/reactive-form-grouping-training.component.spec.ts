import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormGroupingTrainingComponent } from './reactive-form-grouping-training.component';

describe('ReactiveFormGroupingTrainingComponent', () => {
  let component: ReactiveFormGroupingTrainingComponent;
  let fixture: ComponentFixture<ReactiveFormGroupingTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormGroupingTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormGroupingTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
