import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioListaComponent } from './components/usuario-lista/usuario-lista.component';


const routes: Routes = [
  {
    path: '',
    component: UsuarioListaComponent,
    data: {
      breadcrumb: 'Amostra de componente cadastro usuário'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
