import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsAmostraComponent } from './buttons-amostra.component';

describe('ButtonsAmostraComponent', () => {
  let component: ButtonsAmostraComponent;
  let fixture: ComponentFixture<ButtonsAmostraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsAmostraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsAmostraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
