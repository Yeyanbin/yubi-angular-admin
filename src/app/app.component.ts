import { Component, OnInit } from '@angular/core';
import { userModule } from '@store/user';
import { useUserService, useRouter } from '@store/base';
import { UserService } from '@api/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(userService: UserService, router: Router) {
    // This is necessary for use store
    useUserService(userService);
    useRouter(router);
  }

  ngOnInit(): void {
    userModule.action.init();
  }
}
