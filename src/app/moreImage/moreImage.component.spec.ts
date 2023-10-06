/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoreImageComponent } from './moreImage.component';

describe('MoreImageComponent', () => {
  let component: MoreImageComponent;
  let fixture: ComponentFixture<MoreImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
