import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TARGComponent } from './targ.component';

describe('TARGComponent', () => {
  let component: TARGComponent;
  let fixture: ComponentFixture<TARGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TARGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TARGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
