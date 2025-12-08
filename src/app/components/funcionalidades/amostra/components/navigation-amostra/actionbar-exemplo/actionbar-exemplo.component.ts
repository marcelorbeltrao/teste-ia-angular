import { Component, Inject } from "@angular/core";
import { ACTIONBAR_DATA, ActionBarRef } from "@sicoob/ui";

@Component({
  selector: 'app-actionbar-exemplo',
  templateUrl: './actionbar-exemplo.component.html',
  styleUrls: ['./actionbar-exemplo.component.scss']
})
export class ActionbarExemploComponent {

  public parametros;

  constructor(
    public actionBarRef: ActionBarRef,
    @Inject(ACTIONBAR_DATA) public data
  ) {
    this.parametros = data;
  }

  closeActionbar():void{
    const retorno = {nome: 'Retornando parametros ao fechar a Actionbar.'}
    this.actionBarRef.close(retorno);
  }
}
