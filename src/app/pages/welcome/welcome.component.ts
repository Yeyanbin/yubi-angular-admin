import { Component, OnInit } from '@angular/core';
import { getUserModule } from '@store/user';

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
    this.userModule = getUserModule();
  }

  updateUserID(): void {
    this.userModule.action.setUserID('newId' + this.num++);
  }

}
