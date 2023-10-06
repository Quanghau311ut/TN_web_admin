/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AcountComponent } from './acount.component';

describe('AcountComponent', () => {
  let component: AcountComponent;
  let fixture: ComponentFixture<AcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
