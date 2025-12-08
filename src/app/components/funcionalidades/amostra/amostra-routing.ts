import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmostraComponent } from '@app/components/funcionalidades/amostra/amostra.component';


const routes: Routes = [
  {
    path: '',
    component: AmostraComponent,
    data: {
      breadcrumb: 'Amostra de componentes Angular'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmostraRoutingModule { }
