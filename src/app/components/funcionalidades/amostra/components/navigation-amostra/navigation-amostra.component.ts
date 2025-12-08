import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ActionBarRef, ActionBarService, HeaderActionsContainerService, ModalConfirmComponent, ModalRef, ModalService, SidebarContainerService, ToolbarItem } from '@sicoob/ui';
import { TemplatePortal } from '@angular/cdk/portal';
import { ModalExemploComponent } from './modal-exemplo/modal-exemplo.component';
import { ActionbarExemploComponent } from './actionbar-exemplo/actionbar-exemplo.component';

@Component({
  selector: 'app-navigation-amostra',
  templateUrl: './navigation-amostra.component.html',
  styleUrls: ['./navigation-amostra.component.css']
})
export class NavigationAmostraComponent {

  @ViewChild('headerTemplate')
  headerTemplate: TemplateRef<any>;

  @ViewChild('sidebarTemplate')
  sidebarTemplate: TemplateRef<any>;

  itemsToolbar: ToolbarItem[] = [
    { displayName: 'Forms', iconName: 'mdi-home', route: '/forms' },
    { displayName: 'Toggle', iconName: 'mdi-toggle-switch', route: '/toggle' },
    { displayName: 'Snackbar', iconName: 'mdi-progress-alert', route: '/snackbar' },
    { displayName: 'Tabs', iconName: 'mdi-tab-row', route: '/tabs' },
    { displayName: 'Actionbar', iconName: 'mdi-gesture-tap', route: '/actionbar' },
    { displayName: 'ProgressBar', iconName: 'mdi-gesture-tap', route: '/progress-bar' },
  ];

  constructor(
    private actionBarService: ActionBarService,
    private modalService: ModalService,
    private headerService: HeaderActionsContainerService,
    private sidebarService: SidebarContainerService
  ) {

  }

  onModalConfirm(){
      const actionBarRef:ModalRef = this.modalService.open(ModalConfirmComponent, {
        data: {
          title: "Excluir registro",
          content: "Tem certeza que deseja excluir esse registro?"
        }
      });

    actionBarRef.afterClosed().subscribe(confirm => {
      if(confirm)
        alert("Excluir registro");
      else
        alert("Não excluir registro");
    });

  }

  onModalCustomized(){
    const modalRef:ModalRef = this.modalService.open(ModalExemploComponent, {
      data:{
        titulo: "Exemplo de sc-modal",
        conteudo: "Passando conteúdo para o modal"
      }
    });
    modalRef.afterClosed().subscribe(p => {
      console.info("Modal fechado:", p);
    });
  }

  onActionbar(){
    const actionBarRef:ActionBarRef = this.actionBarService.open(ActionbarExemploComponent, {
      data: {
        conteudo: "Passando conteúdo para a Actionbar"
      }
    });
    actionBarRef.afterClosed().subscribe(p => {
      console.info("Actionbar fechada:", p);
    });
  }

  showHeader(){
    //Aplica o template ao header da página
    this.headerService.open(new TemplatePortal(this.headerTemplate, undefined, {}));
  }

  removeHeader(){
    /*
      Remove o template ao header da página, geralmente esse método é utilizado no ngOnDestroy do componente

      Ex:
        ngOnDestroy() {
          this.headerService.remove();
        }
    */
    this.headerService.remove();
  }

  onSidebar() {
    this.sidebarService.open(new TemplatePortal(this.sidebarTemplate, undefined, {}));
  }

  closeSidebar() {
    this.sidebarService.close();
  }

  onCadastre(){
    alert('Cadastrar');
  }

  onPrint(){
    alert('Imprimir');
  }

  onExport(){
    alert('Exportar');
  }

}
