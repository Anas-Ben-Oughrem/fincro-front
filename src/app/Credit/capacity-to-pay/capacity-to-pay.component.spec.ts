import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityToPayComponent } from './capacity-to-pay.component';

describe('CapacityToPayComponent', () => {
  let component: CapacityToPayComponent;
  let fixture: ComponentFixture<CapacityToPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacityToPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacityToPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
