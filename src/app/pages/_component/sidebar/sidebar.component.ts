import { Component, Input, OnInit } from '@angular/core';
import { menu } from '../../pages.config';
import { LayoutModule } from '@store/layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  menu = menu;

  @Input()
  isCollapsed!: boolean;

  constructor(
    public layoutModule: LayoutModule) {

  }

  ngOnInit(): void {

  }

}
