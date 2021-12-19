import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterProductQuantityComponent } from './alter-product-quantity.component';

describe('AlterProductQuantityComponent', () => {
  let component: AlterProductQuantityComponent;
  let fixture: ComponentFixture<AlterProductQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterProductQuantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterProductQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
