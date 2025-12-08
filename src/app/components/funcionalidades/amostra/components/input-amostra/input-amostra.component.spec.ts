import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAmostraComponent } from './input-amostra.component';

describe('InputAmostraComponent', () => {
  let component: InputAmostraComponent;
  let fixture: ComponentFixture<InputAmostraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAmostraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputAmostraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
