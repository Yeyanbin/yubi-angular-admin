import { Component, OnInit } from '@angular/core';
import { getUserModule } from '@store/user';
import { UserService } from '@api/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(userService: UserService) {
    // This is necessary for use store
    getUserModule().setUserService(userService);
  }

  ngOnInit(): void {

  }
}
