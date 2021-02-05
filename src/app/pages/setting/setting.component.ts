import { Component, OnInit } from '@angular/core';

import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})

export class SettingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  exportExcel() {
    var xlsxParam = { raw: true };//转换成excel时，使用原始的格式
    var wb = XLSX.utils.table_to_book(document.querySelector("#outTable"),xlsxParam);//outTable为列表id
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
