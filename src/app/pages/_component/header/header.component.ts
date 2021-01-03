import { Component, OnInit } from '@angular/core';

import { userModule } from '@store/user';
import { layoutModule } from '@store/layout';
import { text } from '@utils/lang';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userModule = userModule;
  layoutModule = layoutModule;
  text = text;

  constructor() { }

  ngOnInit(): void {
  }

}
