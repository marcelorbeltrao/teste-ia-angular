/**
 * @description Arquivo para declaração de módulos compartilhados na aplicação
 * @author gilluan.sousa <gilluan.sousa@sicoob.com.br>
 *
 */

import { NgModule } from '@angular/core';
import {
  UiModule, NavbarModule, ToolbarModule,
  ButtonModule, LabelModule, FormModule, ActionbarModule,
  ModalModule, CardModule,
} from '@sicoob/ui';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LayoutModule } from '@angular/cdk/layout';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { NGX_MASK_CONFIG, NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { MatPaginationTranslate } from '@app/shared/translate/mat-paginator-translate';
import { CurrencyMaskConfig, CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';

defineLocale('pt', ptBrLocale);

export const customCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: true,
  min: null,
  max: null,
  inputMode: CurrencyMaskInputMode.FINANCIAL
} as CurrencyMaskConfig;

@NgModule({
  imports: [
    UiModule,
    ButtonModule,
    NavbarModule,
    ToolbarModule,
    TranslateModule,
    LabelModule,
    CommonModule,
    FormsModule,
    FormModule,
    ActionbarModule,
    ModalModule,
    CardModule,
    BsDatepickerModule.forRoot(),
    NgxDatatableModule,

    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonToggleModule,

    MatRadioModule,
    MatCheckboxModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,

    MatDialogModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatSliderModule,
    MatStepperModule,
    MatTooltipModule,
    MatTreeModule,

    NgxMaskPipe,
    NgxMaskDirective,
    NgxCurrencyModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig)
  ],
  exports: [
    UiModule,
    ButtonModule,
    NavbarModule,
    ToolbarModule,
    TranslateModule,
    LabelModule,
    CommonModule,

    // Angular Forms
    FormsModule,
    FormModule,
    ActionbarModule,
    ModalModule,
    CardModule,
    BsDatepickerModule,

    ReactiveFormsModule,
    LayoutModule,

    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonToggleModule,

    MatRadioModule,
    MatCheckboxModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,

    MatDialogModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatSliderModule,
    MatStepperModule,
    MatTooltipModule,
    MatTreeModule,

    NgxMaskPipe,
    NgxMaskDirective,
    NgxCurrencyModule

  ],
  declarations: [

  ],
  providers: [
    DatePipe,
    { provide: NGX_MASK_CONFIG, useValue: { validation: false } },
    provideNgxMask(),
    {
      provide: MatPaginatorIntl,
      useFactory: (translate) => {
        const service = new MatPaginationTranslate();
        return service.injectTranslateService(translate);
      },
      deps: [TranslateService]
    }
  ]
})
export class SharedModule { }
