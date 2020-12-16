import { Component, OnInit } from '@angular/core';

import { loginFormConfig, searchFormConfig } from './form.config';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  loginFormConfig = {};
  searchFormConfig = {};
  constructor() { }

  ngOnInit(): void {
    this.loginFormConfig = loginFormConfig;
    this.searchFormConfig = searchFormConfig;
  }

}
