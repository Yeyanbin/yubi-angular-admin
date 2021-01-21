import { Component, OnInit } from '@angular/core';
import { LayoutModule } from '@store/layout';
import { UserModule } from '@store/user';
// import { userModule } from '@store/user';
// import { layoutModule } from '@store/layout';
import { text } from '@utils/lang';
import { WelcomeConfig } from './welcome.config';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  providers: [WelcomeConfig]
})

export class WelcomeComponent implements OnInit {

  text = text;

  langs = this.welcomeConfig.langs;
  themes = this.welcomeConfig.themes;

  constructor(
    public userModule: UserModule,
    public layoutModule: LayoutModule,
    public welcomeConfig: WelcomeConfig) {
  }

  ngOnInit(): void {
  }

}
