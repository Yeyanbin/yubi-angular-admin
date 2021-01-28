import { Component, OnInit } from '@angular/core';
import { UserModule } from '@store/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(public userModule: UserModule) { }

  // works = this.userModule.state.works;

  ngOnInit(): void {
    this.userModule.getWorks();
  }

}
