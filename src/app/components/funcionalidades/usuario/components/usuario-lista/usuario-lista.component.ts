import { Component, ViewChild, OnInit, TemplateRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioDetalharComponent } from '../usuario-detalhar/usuario-detalhar.component';
import { ActionBarService, HeaderActionsContainerService, ModalConfirmComponent, ModalRef, ModalService } from '@sicoob/ui';
import { Usuario } from '../../models/usuario.model';
import { UsuarioIncluirComponent } from '../usuario-incluir/usuario-incluir.component';
import { TemplatePortal } from '@angular/cdk/portal';
import { TranslateService } from '@ngx-translate/core';

const EXAMPLE_DATA: Usuario[] = [
  {
    "firstName": "Kemmer, Boyle and Rohan",
    "lastName": "Kemmer",
    "address":"",
    "complement": "",
    "city": "",
    "state": "",
    "postalCode": "",
    "shipping": ""
  },
  {
    "firstName": "Fadel Group",
    "lastName": "f Group",
    "address":"",
    "complement": "",
    "city": "",
    "state": "",
    "postalCode": "",
    "shipping": ""
  }
];



@Component({
  selector: "app-usuario-lista",
  templateUrl: 'usuario-lista.component.html',
  styleUrls: ["usuario-lista.component.scss"]
})
export class UsuarioListaComponent{

  displayedColumns: string[] = ['firstName', 'action'];
  dataSource = new MatTableDataSource<Usuario>(EXAMPLE_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  // O template que será usado no header
  @ViewChild('headerTemplate')
  headerTemplate: TemplateRef<any>;

  constructor(
    private actionBarService: ActionBarService,
    private modalService: ModalService,
    private headerService: HeaderActionsContainerService,
    private translateService: TranslateService
  ) {
    this.dataSource = new MatTableDataSource(EXAMPLE_DATA);

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    //Aplica o template ao header da página
    this.headerService.open(new TemplatePortal(this.headerTemplate, undefined, {}));
  }

  ngOnDestroy() {
    this.headerService.remove();
  }

  onDetail(user: Usuario): void{
    this.actionBarService.open(UsuarioDetalharComponent, {
      data: user
    });
  }

  onDelete(usuario): void{
    var actionBarRef: ModalRef = null;
    this.translateService.get(["LBL_USER_DELETE", "LBL_USER_DELETE_MESSAGE"]).subscribe((text:any) => {
        actionBarRef = this.modalService.open(ModalConfirmComponent, {
          data: {
            title: text.LBL_USER_DELETE,
            content: text.LBL_USER_DELETE_MESSAGE
          }
        });
    });

    actionBarRef.afterClosed().subscribe(user => {
      if(user){
        //TODO: Implementação de serviço para excluir usuário
        console.info("Usuário excuir", user);
      }
    });
  }

  onAdd(): void{
    const actionBarRef = this.actionBarService.open(UsuarioIncluirComponent);
    actionBarRef.afterClosed().subscribe(user => {
      if (user) {
        //TODO: Chamar serviço para atualizar a lista de usuários cadastrados
        console.info("Usuário cadastrado", user);
      }
    });
  }

}
