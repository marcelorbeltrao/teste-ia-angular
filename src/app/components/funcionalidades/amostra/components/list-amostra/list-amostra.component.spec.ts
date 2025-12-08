import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAmostraComponent } from './list-amostra.component';

describe('ListAmostraComponent', () => {
  let component: ListAmostraComponent;
  let fixture: ComponentFixture<ListAmostraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAmostraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAmostraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
