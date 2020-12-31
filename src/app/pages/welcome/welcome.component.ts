import { Component, OnInit } from '@angular/core';
import { userModule } from '@store/user';
import { layoutModule } from '@store/layout';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {

  userModule: any;
  num = 1;
  constructor() { }

  ngOnInit(): void {
    // this.userModule = getUserModule();
    this.userModule = userModule;
  }

  updateUserID(): void {
    this.userModule.action.setUserID('newId' + this.num++);
  }

  updateLang(): void {
    layoutModule.lang === 'en-uk' ? layoutModule.lang = 'zh-cn' : layoutModule.lang = 'en-uk';
    console.log(layoutModule.lang);
  }
}
