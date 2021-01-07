import { Component, OnInit } from '@angular/core';
import { layoutModule } from '@store/layout';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})

export class PagesComponent implements OnInit {

  layoutModule = layoutModule;

  constructor() {
  }

  ngOnInit(): void {
  }

}


