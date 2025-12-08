import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { UsuarioRoutingModule } from './usuario-routing';
import { UsuarioListaComponent } from './components/usuario-lista/usuario-lista.component';
import { UsuarioDetalharComponent } from './components/usuario-detalhar/usuario-detalhar.component';
import { UsuarioIncluirComponent } from './components/usuario-incluir/usuario-incluir.component';


@NgModule({
  declarations: [
    UsuarioListaComponent,
    UsuarioDetalharComponent,
    UsuarioIncluirComponent
  ],
  imports: [
    SharedModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
