import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCartSelectComponent } from './add-cart-select.component';

describe('AddCartSelectComponent', () => {
  let component: AddCartSelectComponent;
  let fixture: ComponentFixture<AddCartSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCartSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCartSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
