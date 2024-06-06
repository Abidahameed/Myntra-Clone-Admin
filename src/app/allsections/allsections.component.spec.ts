import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsectionsComponent } from './allsections.component';

describe('AllsectionsComponent', () => {
  let component: AllsectionsComponent;
  let fixture: ComponentFixture<AllsectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllsectionsComponent]
    });
    fixture = TestBed.createComponent(AllsectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
