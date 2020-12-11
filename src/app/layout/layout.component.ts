import { Component, OnInit } from '@angular/core';
import { useRouteMenu } from './layout.use';
import { IMenuItem } from 'src/_interface/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  menu: IMenuItem[] = [];

  constructor(　private router: Router ) {}

  ngOnInit(): void {
    this.menu = useRouteMenu();
    console.log(this.router);
  }

}
