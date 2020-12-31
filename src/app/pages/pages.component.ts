import { Component, OnInit } from '@angular/core';
import { UserService } from '@api/user';
import { userModule } from '@store/user';
import { layoutModule } from '@store/layout';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})

export class PagesComponent implements OnInit {
  isCollapsed = false;
  userModule = userModule;
  layoutModule = layoutModule;

  constructor(userService: UserService) {
  }

  ngOnInit(): void {
  }

}


