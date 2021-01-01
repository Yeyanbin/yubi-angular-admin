import { Component, OnInit } from '@angular/core';
import { UserService } from '@api/user';
import { userModule } from '@store/user';
import { layoutModule } from '@store/layout';
import { IText, text } from '@utils/lang';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})

export class PagesComponent implements OnInit {
  isCollapsed = false;
  userModule = userModule;
  layoutModule = layoutModule;
  text: IText = text;

  constructor(userService: UserService) {
  }

  ngOnInit(): void {
  }

}


