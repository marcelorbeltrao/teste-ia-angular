import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@sicoob/security';
import { TemplateComponent } from './components/template/template.component';
import { HomeComponent } from './components/home/home.component';
import { ForbiddenComponent, NotFoundComponent } from '@sicoob/ui';

const routes: Routes = [
  {
    path: '', // A rota raiz sempre deve existir
    component: TemplateComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
          breadcrumb: 'Componentes'
        }
      },
      {
        path: 'amostra',
        loadChildren: () => import('./components/funcionalidades/amostra/amostra.module').then( m => m.AmostraModule)
      },
      {
        path: 'usuario',
        loadChildren: () => import('./components/funcionalidades/usuario/usuario.module').then( m => m.UsuarioModule)
      }
    ]
  },
  // {
  //   path: 'minhaRota', // Exemplo: Esta é uma rota espefífica que não usa o TemplateComponent
  //   component: MinhaRotaComponent,
  //   canActivate: [AuthGuard]
  // },
  {
    path: 'forbidden', // Quando o usuário não pode acessar o componente baseado no AuthGuard
    component: ForbiddenComponent
  },
  {
    path: '**', component: NotFoundComponent// Componente apresentado quando a rota não existe
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
