import { Component, OnInit } from '@angular/core';

import { UserModule } from '@store/user';
import { LayoutModule } from '@store/layout';
import { HistoryModule } from '@store/history';
import { text } from '@utils/lang';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  text = text;

  constructor(
    public userModule: UserModule,
    public historyModule: HistoryModule,
    public layoutModule: LayoutModule) { }

  ngOnInit(): void {
  }

}
