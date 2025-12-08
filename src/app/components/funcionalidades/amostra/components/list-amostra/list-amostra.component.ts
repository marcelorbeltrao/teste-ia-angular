import { Component } from '@angular/core';

@Component({
  selector: 'app-list-amostra',
  templateUrl: './list-amostra.component.html',
  styleUrls: ['./list-amostra.component.scss']
})
export class ListAmostraComponent {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  typesOfShoes2: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
