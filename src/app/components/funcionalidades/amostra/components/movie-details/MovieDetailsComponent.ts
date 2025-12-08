import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-details',
  template: `
    <h1>{{ data.movie }}</h1>
    <p>Diretor: {{ data.director }}</p>
    <p>Ano: {{ data.year }}</p>
    <p>Rating: {{ data.rating }}</p>
    <!-- Você pode adicionar mais detalhes aqui -->
  `,
})
export class MovieDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
