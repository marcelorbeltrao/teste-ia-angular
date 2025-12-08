import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDetalharComponent } from './usuario-detalhar.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ActionBarRef, ACTIONBAR_DATA } from '@sicoob/ui';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { Usuario } from '../../models/usuario.model';

describe('UsuarioDetalharComponent', () => {
  let component: UsuarioDetalharComponent;
  let fixture: ComponentFixture<UsuarioDetalharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        OverlayModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          }
        })
      ],
      declarations: [ UsuarioDetalharComponent ],
      providers: [
        {provide: ActionBarRef, useValue: {}},
        {provide: ACTIONBAR_DATA, useValue: []},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioDetalharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    spyOn(component.modalService, 'open').and.stub();
    spyOn(component.actionBarRef['editar'], 'emit').and.stub();

    // component.onDetalhar({tipoHistorico: 'INCLUSAO'} as Historico);
    // expect(component.modalService.open).toHaveBeenCalledTimes(1);

    // component.onEditar();
    // expect(component.actionBarRef['editar'].emit).toHaveBeenCalledTimes(1);

  });
});
