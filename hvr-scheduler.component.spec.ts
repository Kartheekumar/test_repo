import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HvrSchedulerComponent } from './hvr-scheduler.component';

describe('HvrSchedulerComponent', () => {
  let component: HvrSchedulerComponent;
  let fixture: ComponentFixture<HvrSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HvrSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HvrSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
