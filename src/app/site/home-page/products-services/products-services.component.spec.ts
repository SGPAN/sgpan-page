import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductsServicesComponent } from './products-services.component';

describe('ProductsServicesComponent', () => {
  let component: ProductsServicesComponent;
  let fixture: ComponentFixture<ProductsServicesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
