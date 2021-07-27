import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrastCardComponent } from './contrast-card.component';

describe('ContrastCardComponent', () => {
  let component: ContrastCardComponent;
  let fixture: ComponentFixture<ContrastCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContrastCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContrastCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
