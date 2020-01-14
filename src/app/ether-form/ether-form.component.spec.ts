import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtherFormComponent } from './ether-form.component';

describe('EtherFormComponent', () => {
  let component: EtherFormComponent;
  let fixture: ComponentFixture<EtherFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtherFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
