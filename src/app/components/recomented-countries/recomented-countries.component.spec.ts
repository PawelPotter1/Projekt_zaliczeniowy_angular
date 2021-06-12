import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomentedCountriesComponent } from './recomented-countries.component';

describe('RecomentedCountriesComponent', () => {
  let component: RecomentedCountriesComponent;
  let fixture: ComponentFixture<RecomentedCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomentedCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomentedCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
