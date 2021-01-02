import { Component, Input, OnInit } from '@angular/core';
import { menu } from '../../pages.menu';
import { layoutModule } from '@store/layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  // items: any[] = [];
  // theme: NzMenuThemeType = 'light';
  // mode = 'inline';
  menu = menu;
  layoutModule = layoutModule;

  @Input()
  isCollapsed!: boolean;

  ngOnInit(): void {

  }

}
