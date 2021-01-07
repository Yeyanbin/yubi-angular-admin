import { Component, OnInit } from '@angular/core';
import { UseNgModule } from '@store/base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  /**
   * This is necessary for store to use NgModule.
   * @param _ Just init store
   */
  constructor(_: UseNgModule) {
  }

  ngOnInit(): void {
  }
}
