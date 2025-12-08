import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AmostraComponent } from '@app/components/funcionalidades/amostra/amostra.component';
import { ButtonsAmostraComponent } from '@app/components/funcionalidades/amostra/components/buttons-amostra/buttons-amostra.component';
import { ListAmostraComponent } from '@app/components/funcionalidades/amostra/components/list-amostra/list-amostra.component';
import { TableAmostraComponent } from '@app/components/funcionalidades/amostra/components/table-amostra/table-amostra.component';
import { DashboardAmostraComponent } from '@app/components/funcionalidades/amostra/components/dashboard-amostra/dashboard-amostra.component';
import { NavigationAmostraComponent } from '@app/components/funcionalidades/amostra/components/navigation-amostra/navigation-amostra.component';
import { AmostraRoutingModule } from './amostra-routing';
import { InputAmostraComponent } from './components/input-amostra/input-amostra.component';
import { TootipAmostraComponent } from './components/tootip-amostra/tootip-amostra.component';
import { DateAmostraComponent } from './components/date-amostra/date-amostra.component';
import { TabelaAmostraComponent } from './components/table-checkbox-amostra/table-checkbox-amostra.component';
import { StylePaginatorDirective } from '../../../shared/directives/style-paginator-directive';
import { ModalExemploComponent } from './components/navigation-amostra/modal-exemplo/modal-exemplo.component';
import { ActionbarExemploComponent } from './components/navigation-amostra/actionbar-exemplo/actionbar-exemplo.component';

@NgModule({
  declarations: [
    AmostraComponent,

    ButtonsAmostraComponent,
    NavigationAmostraComponent,
    DashboardAmostraComponent,
    TableAmostraComponent,
    ListAmostraComponent,
    InputAmostraComponent,
    TootipAmostraComponent,
    DateAmostraComponent,
    TabelaAmostraComponent,
    ModalExemploComponent,
    ActionbarExemploComponent,

    StylePaginatorDirective
  ],
  imports: [
    SharedModule,
    AmostraRoutingModule
  ]
})
export class AmostraModule { }
