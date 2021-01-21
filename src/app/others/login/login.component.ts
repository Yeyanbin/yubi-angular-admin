import { Component, OnInit } from '@angular/core';
import { text } from '@utils/lang';
import { LoginConfig } from './login.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginConfig]
})

export class LoginComponent implements OnInit {
  text = text;

  constructor(private loginConfig: LoginConfig) { }

  ngOnInit(): void {
  }

  public get loginFormConfig(): any {
    return this.loginConfig.loginFormConfig;
  }

}
