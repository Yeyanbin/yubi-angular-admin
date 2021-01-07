import { Component, OnInit } from '@angular/core';
import { userModule } from '@store/user';
import { layoutModule } from '@store/layout';
import { text } from '@utils/lang';
import { langs, themes } from './welcome.config';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {

  text = text;
  userModule = userModule;
  layoutModule = layoutModule;

  langs = langs;
  themes = themes;

  constructor() { }

  ngOnInit(): void {
  }

}
