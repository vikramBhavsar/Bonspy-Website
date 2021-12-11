import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtiSeedEnhancementComponent } from './arti-seed-enhancement.component';

describe('ArtiSeedEnhancementComponent', () => {
  let component: ArtiSeedEnhancementComponent;
  let fixture: ComponentFixture<ArtiSeedEnhancementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtiSeedEnhancementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtiSeedEnhancementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
