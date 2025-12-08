import { Component, ViewChild, OnInit } from "@angular/core";

import { SidebarContainerComponent, NavItem } from "@sicoob/ui";
import { Observable, of } from "rxjs";
import { TranslateService } from "@ngx-translate/core";
import { logout, selectSicoobUser, UsuarioSicoob } from "@sicoob/security";
import { Store, select } from "@ngrx/store";
//import { version } from '../../../../package.json';
import { BsLocaleService } from "ngx-bootstrap/datepicker";

@Component({
  selector: "app-sc-template",
  templateUrl: "./template.component.html",
  styleUrls: ["./template.component.scss"],
})
export class TemplateComponent implements OnInit {
  @ViewChild(SidebarContainerComponent)
  sidebarContainerComponent: SidebarContainerComponent;
  version: string = "0";

  /**
   * Estrutura para adicionar um item para o navbar
   */
  itemsNavbar: NavItem[] = [
    { displayName: "Notificações", iconName: "mail", disabled: true },
  ];

  /**
   * Informações do usuário logado
   */
  user$: Observable<UsuarioSicoob> = of({} as any);

  constructor(
    public translate: TranslateService,
    private bsLocaleService: BsLocaleService,
    public authStore$: Store<any>
  ) {
    this.configureTranslate();
  }

  // Ao iniciar o angular busca o usuário
  ngOnInit() {
    // Seleciona o usuário da store de autenticação
    this.user$ = this.authStore$.pipe(select(selectSicoobUser));
  }

  // Cria as configurações de idioma
  configureTranslate() {
    // O português brasileiro agora possui o id 'pt' e não mais 'pt-BR'
    // Veja: https://angular.io/guide/i18n
    const browserLang = this.translate.getBrowserLang();
    this.translate.setDefaultLang("pt");
    this.changeLang(browserLang);
  }

  // Remove as permissões de acesso e redireciona para o CAS remover os cookies.
  logout() {
    this.authStore$.dispatch(logout());
  }

  onItemClick($event) {}

  changeLang(lang: string) {
    this.translate.use(lang);
    this.bsLocaleService.use(lang);
  }

  isClosed(): Observable<boolean> {
    return this.sidebarContainerComponent?.isClosed$ ?? of(true);
  }
}
