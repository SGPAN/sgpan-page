import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LocationImgWtdComponent } from './location-img-wtd.component';

describe('LocationImgWtdComponent', () => {
  let component: LocationImgWtdComponent;
  let fixture: ComponentFixture<LocationImgWtdComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationImgWtdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationImgWtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
