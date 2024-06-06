import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbrandsComponent } from './allbrands.component';

describe('AllbrandsComponent', () => {
  let component: AllbrandsComponent;
  let fixture: ComponentFixture<AllbrandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllbrandsComponent]
    });
    fixture = TestBed.createComponent(AllbrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
