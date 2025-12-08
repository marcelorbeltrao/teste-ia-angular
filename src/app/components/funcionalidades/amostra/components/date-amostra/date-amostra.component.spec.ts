import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateAmostraComponent } from './date-amostra.component';

describe('DateAmostraComponent', () => {
  let component: DateAmostraComponent;
  let fixture: ComponentFixture<DateAmostraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateAmostraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateAmostraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
