import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartAsyncComponent } from './smart-async.component';

describe('SmartAsyncComponent', () => {
  let component: SmartAsyncComponent;
  let fixture: ComponentFixture<SmartAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartAsyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
