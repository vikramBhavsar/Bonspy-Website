import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AMCIPlanComponent } from './amci-plan.component';

describe('AMCIPlanComponent', () => {
  let component: AMCIPlanComponent;
  let fixture: ComponentFixture<AMCIPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AMCIPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AMCIPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
