/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventsShowComponent } from './events-show.component';

describe('EventsShowComponent', () => {
  let component: EventsShowComponent;
  let fixture: ComponentFixture<EventsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
