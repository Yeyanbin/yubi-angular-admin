import { Component, OnInit } from '@angular/core';
import { TableModule } from '@store/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(public tableModule: TableModule) { }

  ngOnInit(): void {
  }

}
