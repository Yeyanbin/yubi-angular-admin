import { Component, Input, OnInit } from '@angular/core';
import { menu } from '../../pages.menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  items: any[] = [];
  theme = 'dark';
  mode = 'inline';


  @Input()
  isCollapsed!: boolean;

  ngOnInit(): void {
    this.theme = menu.theme;
    this.mode = menu.mode;
    this.items = menu.items;
    console.log(this.items);
  }

}
