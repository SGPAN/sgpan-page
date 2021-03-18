import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FirstNavComponent } from './first-nav.component';

describe('FirstNavComponent', () => {
  let component: FirstNavComponent;
  let fixture: ComponentFixture<FirstNavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
