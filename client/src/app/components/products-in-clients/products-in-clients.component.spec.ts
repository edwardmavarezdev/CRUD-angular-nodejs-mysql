import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsInClientsComponent } from './products-in-clients.component';

describe('ProductsInClientsComponent', () => {
  let component: ProductsInClientsComponent;
  let fixture: ComponentFixture<ProductsInClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsInClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsInClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
