import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtherTaskStepsComponent } from './ether-task-steps.component';

describe('EtherTaskStepsComponent', () => {
  let component: EtherTaskStepsComponent;
  let fixture: ComponentFixture<EtherTaskStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtherTaskStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtherTaskStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
