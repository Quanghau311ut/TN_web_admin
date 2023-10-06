/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HotLineComponent } from './hotLine.component';

describe('HotLineComponent', () => {
  let component: HotLineComponent;
  let fixture: ComponentFixture<HotLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
