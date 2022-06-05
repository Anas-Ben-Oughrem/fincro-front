import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroCreditComponent } from './micro-credit.component';

describe('MicroCreditComponent', () => {
  let component: MicroCreditComponent;
  let fixture: ComponentFixture<MicroCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroCreditComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
