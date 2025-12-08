import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {SelectionModel} from "@angular/cdk/collections";

export interface Movie {
  movie: string;
  director: string;
  year: number;
  rating: number;
  selected?: boolean;
}

@Component({
  selector: 'app-tabela-checkbox-amostra',
  templateUrl: './table-checkbox-amostra.component.html',
  styleUrls: ['./table-checkbox-amostra.component.scss']
})
export class TabelaAmostraComponent {

  @ViewChild(MatSort) sort: MatSort;

  moviesForm: FormGroup;

  displayedColumns: string[] = ['selected', 'movie', 'director', 'year'];

  dataSourceTable = new MatTableDataSource([
    {
      "movie": "A Origem",
      "director": "Christopher Nolan",
      "year": 2010,
      "rating": 8.8,
      "selected": false
    },
    {
      "movie": "Gladiador",
      "director": "Ridley Scott",
      "year": 2000,
      "rating": 8.5,
      "selected": false
    },
    {
      "movie": "Parasita",
      "director": "Bong Joon Ho",
      "year": 2019,
      "rating": 8.6,
      "selected": false
    },
    {
      "movie": "O Poderoso Chefão",
      "director": "Francis Ford Coppola",
      "year": 1972,
      "rating": 9.2,
      "selected": false
    }
  ]);

  selection = new SelectionModel<Movie>(true, []);

  constructor(private formBuilder: FormBuilder){
    //
    this.moviesForm = this.formBuilder.group({
      movie: ['', Validators.required],
      director: ['', Validators.required],
      year: ['', Validators.required],
      rating: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    this.dataSourceTable.sort = this.sort;
  }


  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.dataSourceTable.data.forEach(row => this.selection.select(row));
    }
  }



  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourceTable.data.length;
    return numSelected === numRows;
  }



  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Movie): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.movie + 1}`;
  }



  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSourceTable.data);
  }

}
