import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductToClientComponent } from './add-product-to-client.component';

describe('AddProductToClientComponent', () => {
  let component: AddProductToClientComponent;
  let fixture: ComponentFixture<AddProductToClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductToClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductToClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
