import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GwcDescriptionComponent } from './gwc-description.component';

describe('GwcDescriptionComponent', () => {
  let component: GwcDescriptionComponent;
  let fixture: ComponentFixture<GwcDescriptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GwcDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwcDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
