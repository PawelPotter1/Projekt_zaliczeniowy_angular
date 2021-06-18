import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCountryComponent } from './data-country.component';

describe('DataCountryComponent', () => {
  let component: DataCountryComponent;
  let fixture: ComponentFixture<DataCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
