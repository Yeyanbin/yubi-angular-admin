import { Component, OnInit } from '@angular/core';
import { TableConfig } from './table.config';


import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

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

  exportExcel() {
    var xlsxParam = { raw: true };//转换成excel时，使用原始的格式
    var wb = XLSX.utils.table_to_book(document.querySelector("#basic-table-1"),xlsxParam);//outTable为列表id
    var wbout = XLSX.write(wb, {
      bookType: "xlsx",
      bookSST: true,
      type: "array"
    });
    try {
      FileSaver.saveAs(
        new Blob([wbout], { type: "application/octet-stream;charset=utf-8" }),
        "sheetjs.xlsx"
      );
    } catch (e) {
      if (typeof console !== "undefined") console.log(e, wbout);
    }
    return wbout;
  }
}
