import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediafilesListComponent } from './mediafiles-list.component';

describe('MediafilesListComponent', () => {
  let component: MediafilesListComponent;
  let fixture: ComponentFixture<MediafilesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediafilesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediafilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
