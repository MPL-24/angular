import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTerm } from './search-term';

describe('SearchTerm', () => {
  let component: SearchTerm;
  let fixture: ComponentFixture<SearchTerm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchTerm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTerm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
