import { Component, OnInit } from '@angular/core';
import { UserService } from '@api/user';
import { IFormConfig } from '@interface/config';
import { loginFormConfig } from './login.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginFormConfig: IFormConfig | undefined;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loginFormConfig = loginFormConfig;
  }

  login(): void {
    console.log('click');

  }

}
