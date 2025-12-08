import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons-amostra',
  templateUrl: './buttons-amostra.component.html',
  styleUrls: ['./buttons-amostra.component.scss']
})
export class ButtonsAmostraComponent {

  items = [
    {label: '1 - Bancoob', data: 1},
    {label: '300 - Confederação', data: 2},
    {label: '1001 - Central 1', data: 3},
    {label: '1002 - Central 2', data: 4},
  ];

}
