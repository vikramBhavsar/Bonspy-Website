import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstituteEarthComponent } from './substitute-earth.component';

describe('SubstituteEarthComponent', () => {
  let component: SubstituteEarthComponent;
  let fixture: ComponentFixture<SubstituteEarthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubstituteEarthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstituteEarthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
