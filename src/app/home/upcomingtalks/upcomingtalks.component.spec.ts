import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingtalksComponent } from './upcomingtalks.component';

describe('UpcomingtalksComponent', () => {
  let component: UpcomingtalksComponent;
  let fixture: ComponentFixture<UpcomingtalksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingtalksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingtalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
