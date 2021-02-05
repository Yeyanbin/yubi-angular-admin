import { Component, Input, OnInit } from '@angular/core';
import { IMenu, PagesConfig } from '../../pages.config';
import { LayoutModule } from '@store/layout';
import { HistoryModule } from '@store/history';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  

  @Input()
  isCollapsed!: boolean;

  constructor(
    public layoutModule: LayoutModule,
    public historyModule: HistoryModule,
    private pagesConfig: PagesConfig) {

  }

  menu: IMenu = this.pagesConfig.menu;

  ngOnInit(): void {

  }

  changePage(name: () => string, path: string): void {
    // console.log(params)
    console.log(name, path);
    this.historyModule.addHistory(name, path);
  }
}
