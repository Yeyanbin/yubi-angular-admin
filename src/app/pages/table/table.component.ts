import { Component, OnInit } from '@angular/core';
import { TableConfig } from './table.config';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TableConfig],
})
export class TableComponent implements OnInit {

  constructor(
    public tableConfig: TableConfig) { }

  table1 = this.tableConfig.tabel1;
  table2 = this.tableConfig.table2;

  ngOnInit(): void {
  }

}
