import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArithComponent } from './arith.component';

describe('ArithComponent', () => {
  let component: ArithComponent;
  let fixture: ComponentFixture<ArithComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArithComponent]
    });
    fixture = TestBed.createComponent(ArithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
