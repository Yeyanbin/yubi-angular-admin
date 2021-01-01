import { Component, OnInit } from '@angular/core';
import { userModule } from '@store/user';
import { layoutModule } from '@store/layout';
import { langType, text } from '@utils/lang';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {

  text = text;
  userModule = userModule;
  layoutModule = layoutModule;

  langs: {value: langType, label: string}[] = [
    // tslint:disable: no-non-null-assertion
    { value: 'zh-cn', label: text.lang!.CN },
    { value: 'en-uk', label: text.lang!.EN },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
