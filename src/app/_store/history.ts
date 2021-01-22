import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action, IHistoryState } from './base';

// tslint:disable:no-conditional-assignment

@Injectable({
  providedIn: 'root'
})
export class HistoryModule {

  constructor(private router: Router) {}

  state: IHistoryState = {
    list: [ { name: 'Welcome', url: './welcome'} ],
    onShow: 'Welcome'
  };

  /**
   * push item of history list.
   * @param name is page name
   * @param url is router url
   */
  @Action()
  public addHistory(name: string, url: string): void {

    if ( !this.state.list.find((item) => {
      return item.name === name;
    }) ) {
      this.state.list.push({ name, url });
    }
    this.state.onShow = name;
  }

  /**
   * delete action
   * @param name delete item that item.name === name
   */
  @Action()
  public removeHistory(name: string): void {
    this.state.list = this.state.list.filter((item) => item.name !== name);
  }
}
