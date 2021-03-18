import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageWorkComponent } from './page-work.component';

describe('PageWorkComponent', () => {
  let component: PageWorkComponent;
  let fixture: ComponentFixture<PageWorkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
