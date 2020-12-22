import { Component, OnInit } from '@angular/core';
import { tableModule } from '@store/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tableModule = tableModule;
  constructor() { }

  ngOnInit(): void {
  }

}
