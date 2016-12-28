/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsersFirsttimeComponent } from './users-firsttime.component';

describe('UsersFirsttimeComponent', () => {
  let component: UsersFirsttimeComponent;
  let fixture: ComponentFixture<UsersFirsttimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersFirsttimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersFirsttimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
