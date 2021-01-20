import { Component, OnInit } from '@angular/core';
import { loginFormConfig } from './login.config';
import { text } from '@utils/lang';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginFormConfig = loginFormConfig;
  text = text;

  constructor() { }

  ngOnInit(): void {
  }
}
