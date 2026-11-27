import { ComponentFixture, TestBed } from '@angular/core/testing';

import { My } from './my';

describe('My', () => {
  let component: My;
  let fixture: ComponentFixture<My>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [My]
    })
    .compileComponents();

    fixture = TestBed.createComponent(My);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
