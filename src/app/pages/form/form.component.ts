import { Component, OnInit } from '@angular/core';

import { loginFormConfig, searchFormConfig, PersonFormConfig } from './form.config';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  loginFormConfig = {};
  searchFormConfig = {};
  PersonFormConfig = {};
  constructor() { }

  ngOnInit(): void {
    this.loginFormConfig = loginFormConfig;
    this.searchFormConfig = searchFormConfig;
    this.PersonFormConfig = PersonFormConfig;
  }

}
