import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMicroCreditComponent } from './add-micro-credit.component';

describe('AddMicroCreditComponent', () => {
  let component: AddMicroCreditComponent;
  let fixture: ComponentFixture<AddMicroCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMicroCreditComponent ]
    })
    .compileComponents();
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMicroCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
