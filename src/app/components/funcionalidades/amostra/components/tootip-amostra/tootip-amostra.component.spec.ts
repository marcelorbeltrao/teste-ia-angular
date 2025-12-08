import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TootipAmostraComponent } from './tootip-amostra.component';

describe('TootipAmostraComponent', () => {
  let component: TootipAmostraComponent;
  let fixture: ComponentFixture<TootipAmostraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TootipAmostraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TootipAmostraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
