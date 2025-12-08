import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


interface PageObject {
  length: number;
  pageIndex: number;
  pageSize: number;
  previousPageIndex: number;
}

export interface Movie {
  rank: number;
  title: string;
  year: number;
  rating: number;
}

const EXAMPLE_DATA: Movie[] = [
  { rank: 1, title: 'The Shawshank Redemption', year: 1994, rating: 9.3 },
  { rank: 2, title: 'The Godfather', year: 1972, rating: 9.2 },
  { rank: 3, title: 'The Godfather: Part II', year: 1974, rating: 9.0 },
  { rank: 4, title: 'The Dark Knight', year: 2008, rating: 9.0 },
  { rank: 5, title: '12 Angry Men', year: 1957, rating: 8.9 },
  { rank: 6, title: "Schindler's List", year: 1993, rating: 8.9 },
  { rank: 7, title: 'The Lord of the Rings: The Return of the King', year: 2003, rating: 8.9 },
  { rank: 8, title: 'Pulp Fiction', year: 1994, rating: 8.9 },
  { rank: 9, title: 'The Good, the Bad and the Ugly', year: 1966, rating: 8.8 },
  { rank: 10, title: 'Fight Club', year: 1999, rating: 8.8 },
  { rank: 11, title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, rating: 8.8 },
  { rank: 12, title: 'Forrest Gump', year: 1994, rating: 8.8 },
  { rank: 13, title: 'Inception', year: 2010, rating: 8.8 },
  { rank: 14, title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980, rating: 8.7 },
  { rank: 15, title: 'The Lord of the Rings: The Two Towers', year: 2002, rating: 8.7 },
  { rank: 16, title: "One Flew Over the Cuckoo's Nest", year: 1975, rating: 8.7 },
  { rank: 17, title: 'Goodfellas', year: 1990, rating: 8.7 },
  { rank: 18, title: 'The Matrix', year: 1999, rating: 8.7 },
  { rank: 19, title: 'Resident', year: 1999, rating: 8.7 },
  { rank: 20, title: 'Cars', year: 1999, rating: 8.7 }
];


@Component({
  selector: 'app-table-amostra',
  templateUrl: './table-amostra.component.html',
  styleUrls: ['./table-amostra.component.css']
})
export class TableAmostraComponent implements AfterViewInit {

  displayedColumns: string[] = ['rank', 'title', 'year', 'rating'];
  dataSource = new MatTableDataSource<Movie>(EXAMPLE_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(EXAMPLE_DATA);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}


