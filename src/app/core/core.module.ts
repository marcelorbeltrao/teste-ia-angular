/*
   Pasta de configuração dos módulos necessários para a aplicação
*/
// Angular Core
import { NgModule, Optional, SkipSelf, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

// Angular Router
import { AppRoutingModule } from '@app/app-routing.module';

// NGRX
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from '@reducers/index';
import { AppEffects } from '@app/app.effects';

// ngx-translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Sicoob Modules
import { AuthModule } from '@sicoob/security';
import { InfraModule, } from '@sicoob/infra';

// Other Libraries
import { NgxPermissionsModule } from 'ngx-permissions';

// Environment
import { environment } from '@env/environment';

import {
  NgxMaskDirective,
  NgxMaskPipe,
  NGX_MASK_CONFIG,
  provideNgxMask
} from 'ngx-mask';

registerLocaleData(localePt);

import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { HeaderModule, HeaderActionsContainerModule, SidebarContainerModule } from '@sicoob/ui';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MAT_DATE_LOCALE } from '@angular/material/core';

export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PortalModule,
    OverlayModule,
    HeaderModule,
    HeaderActionsContainerModule,
    SidebarContainerModule,
    // Angular Forms
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    BrowserAnimationsModule,

    NgxMaskPipe,
    NgxMaskDirective,

    // Angular Forms
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),

    StoreModule.forRoot(
      reducers, { metaReducers }
    ),

    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    !environment.PRODUCTION ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    NgxPermissionsModule.forRoot(),
    // Para mais detalhes acesse:
    // eslint-disable-next-line max-len
    // http://storybook.sicoob.com.br//?selectedKind=4%20DEV%20LIBRARIES%7CAngular&selectedStory=%40sicoob%2Fsecurity&full=0&addons=0&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel
    AuthModule.forRoot({
      isProduction: environment.PRODUCTION,
      apiGateway: environment.API_GATEWAY,
      authGateway: environment.AUTH_GATEWAY,
      ssoGateway: environment.SSO_GATEWAY,
      applicationToken: environment.APPLICATION_TOKEN,
      revokeGateway: environment.REVOKE_GATEWAY,
      ctaForm: environment.CTA_FORM,
      isRHSSO: environment.IS_RHSSO,
      clientIdPublico: environment.CLIENT_ID_PUBLICO,
      mockJwt: environment.AMBIENTE === 'dev' && 'MOCK_BACKEND_JWT' in environment ? environment.MOCK_BACKEND_JWT as string : null,
    }),
    InfraModule.forRoot({
      apiGateway: environment.API_GATEWAY,
      isProduction: environment.PRODUCTION,
      ambiente: environment.AMBIENTE,
      ctaForm: environment.CTA_FORM,
      apiDev: '/rel/api',
      reportConfig: {
        itemsPerPage: 10
      }
    }),

    ServiceWorkerModule.register(
      'ngsw-worker.js',
      { enabled: environment.PRODUCTION }
    )
  ],
  declarations: [],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    { provide: MAT_DATE_LOCALE, useValue: 'pt' },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'auto', appearance: 'outline', subscriptSizing: 'dynamic' } },
    { provide: NGX_MASK_CONFIG, useValue: { validation: false } },
    provideNgxMask(),
  ],
  exports: [
    TranslateModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    InfraModule,
    NgxPermissionsModule,
    ServiceWorkerModule,
    HeaderModule,
    HeaderActionsContainerModule,
    SidebarContainerModule
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
