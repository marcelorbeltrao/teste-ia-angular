import { Component, Inject } from '@angular/core';
import { ActionBarRef, ACTIONBAR_DATA, ModalService } from '@sicoob/ui';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario-detalhar',
  templateUrl: './usuario-detalhar.component.html',
  styleUrls: ['./usuario-detalhar.component.scss']
})
export class UsuarioDetalharComponent {

  usuario: Usuario;

  constructor(
    public modalService: ModalService,
    public actionBarRef: ActionBarRef,
    @Inject(ACTIONBAR_DATA) public data: any,
  ) {
    this.usuario = {... data};
  }

}
