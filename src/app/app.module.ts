import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { TemplateComponent } from './components/template/template.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    HomeComponent

  ],
  imports: [
    CoreModule,
    SharedModule
  ],
  bootstrap: [AppComponent],
  exports: [SharedModule],
  providers: [

  ]
})
export class AppModule { }
