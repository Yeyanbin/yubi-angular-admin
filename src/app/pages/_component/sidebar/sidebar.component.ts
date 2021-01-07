import { Component, Input, OnInit } from '@angular/core';
import { menu } from '../../pages.config';
import { layoutModule } from '@store/layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  menu = menu;
  layoutModule = layoutModule;

  @Input()
  isCollapsed!: boolean;

  constructor() { }

  ngOnInit(): void {

  }

}
