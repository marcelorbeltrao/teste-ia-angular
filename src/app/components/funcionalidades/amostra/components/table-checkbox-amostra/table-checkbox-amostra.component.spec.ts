import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaAmostraComponent } from './table-checkbox-amostra.component';

describe('TabelaAmostraComponent', () => {
  let component: TabelaAmostraComponent;
  let fixture: ComponentFixture<TabelaAmostraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaAmostraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaAmostraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
