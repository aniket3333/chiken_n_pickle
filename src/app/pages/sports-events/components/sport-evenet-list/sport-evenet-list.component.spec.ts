import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportEvenetListComponent } from './sport-evenet-list.component';

describe('SportEvenetListComponent', () => {
  let component: SportEvenetListComponent;
  let fixture: ComponentFixture<SportEvenetListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportEvenetListComponent]
    });
    fixture = TestBed.createComponent(SportEvenetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
