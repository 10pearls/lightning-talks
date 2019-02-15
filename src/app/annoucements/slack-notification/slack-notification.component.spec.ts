import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlackNotificationComponent } from './slack-notification.component';

describe('SlackNotificationComponent', () => {
  let component: SlackNotificationComponent;
  let fixture: ComponentFixture<SlackNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlackNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlackNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
