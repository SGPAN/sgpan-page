import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CarrouselGuanacasteWatershedComponent } from './carrousel-guanacaste-watershed.component';

describe('CarrouselGuanacasteWatershedComponent', () => {
  let component: CarrouselGuanacasteWatershedComponent;
  let fixture: ComponentFixture<CarrouselGuanacasteWatershedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrouselGuanacasteWatershedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselGuanacasteWatershedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
