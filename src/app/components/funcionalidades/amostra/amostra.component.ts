import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Store, select } from '@ngrx/store';
import * as fromUser from '@sicoob/security';
import { Observable } from 'rxjs';


@Component({
  selector: "app-amostra",
  templateUrl: 'amostra.component.html',
  styleUrls: ["amostra.component.scss"]
})
export class AmostraComponent implements OnInit{

  user$: Observable<fromUser.UsuarioSicoob>;

  constructor(
    private dialog: MatDialog,
    private authStore$: Store<fromUser.State>
  ) {

  }

  ngOnInit(): void {

    this.user$ = this.authStore$.pipe(select(fromUser.selectUser));
    this.user$.subscribe(user => console.log("Usuário logado", user));

  }

}
