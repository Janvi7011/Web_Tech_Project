import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtOrderComponent } from './edt-order.component';

describe('EdtOrderComponent', () => {
  let component: EdtOrderComponent;
  let fixture: ComponentFixture<EdtOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdtOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
