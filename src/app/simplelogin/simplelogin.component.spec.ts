import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleloginComponent } from './simplelogin.component';

describe('SimpleloginComponent', () => {
  let component: SimpleloginComponent;
  let fixture: ComponentFixture<SimpleloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
