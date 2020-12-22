import { Component, OnInit } from '@angular/core';
import { UserService } from '@api/user';
import { userModule } from '@store/user';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  isCollapsed = false;
  userModule = userModule;
  
  constructor(userService: UserService) {
  }

  ngOnInit(): void {
  }

}
