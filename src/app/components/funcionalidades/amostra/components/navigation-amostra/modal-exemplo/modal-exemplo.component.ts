import { Component, Inject } from "@angular/core";
import { MODAL_DATA, ModalRef } from "@sicoob/ui";

@Component({
  selector: 'app-modal-exemplo',
  templateUrl: './modal-exemplo.component.html',
  styleUrls: ['./modal-exemplo.component.scss']
})
export class ModalExemploComponent {

  public parametros;

  constructor(
    public modalRef: ModalRef,
    @Inject(MODAL_DATA) public data
  ) {
    this.parametros = data;
  }

  closeModal():void{
    const retorno = {nome: 'Retornando parametros ao fechar a Modal.'}
    this.modalRef.close(retorno);
  }
}
