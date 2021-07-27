import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkModeModaleComponent } from './dark-mode-modale.component';

describe('DarkModeModaleComponent', () => {
  let component: DarkModeModaleComponent;
  let fixture: ComponentFixture<DarkModeModaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkModeModaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkModeModaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
