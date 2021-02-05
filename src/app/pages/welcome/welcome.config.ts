import { Injectable } from '@angular/core';
import { langType, text } from '@utils/lang';
import { NzMenuThemeType } from 'ng-zorro-antd/menu';

@Injectable()
export class WelcomeConfig {

  constructor() {}
  /**
   * The langs is select options of language.
   */
  public langs: {value: langType, label: () => string}[] = [
    // tslint:disable: no-non-null-assertion
    { value: 'zh-cn', label: () => text.lang!.CN },
    { value: 'en-uk', label: () => text.lang!.EN },
    { value: 'ja-jp', label: () => text.lang!.JP },
  ];

  /**
   * The themes is select options of theme types;
   */
  public themes: { value: NzMenuThemeType, label: () => string }[] = [
    { value: 'dark', label: () => text.layout!.theme.dark },
    { value: 'light', label: () => text.layout!.theme.light },
  ];
}

