import { Component, inject, input, OnInit, viewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';




import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [MatPaginator,MatPaginatorModule,MatTableModule,MatSortModule],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css'
})
export class HeroListComponent<T> implements OnInit {


displayedColumns=input.required<string[]>();
data=input.required<T[]>();
sortableColumns=input<string[]>([]);


dataSource= new MatTableDataSource<T>()

private readonly _sort= viewChild.required<MatSort>(MatSort);
private readonly _paginator= viewChild.required<MatPaginator>(MatPaginator);

    readonly dialog = inject(MatDialog);



ngOnInit(): void {
  this.dataSource.data=this.data();
  this.dataSource.sort=this._sort();
    this.dataSource.paginator=this._paginator();

}
}
