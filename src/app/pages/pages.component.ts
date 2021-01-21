import { Component, OnInit } from '@angular/core';
import { LayoutModule } from '@store/layout';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})

export class PagesComponent implements OnInit {

  constructor(public layoutModule: LayoutModule) {
  }

  ngOnInit(): void {
  }

}


