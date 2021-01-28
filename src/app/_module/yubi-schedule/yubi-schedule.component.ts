import { Component, Input, OnInit } from '@angular/core';
import { IWorkItem } from '@store/user';

@Component({
  selector: 'app-yubi-schedule',
  templateUrl: './yubi-schedule.component.html',
  styleUrls: ['./yubi-schedule.component.scss']
})
export class YubiScheduleComponent implements OnInit {

  @Input()
  works: IWorkItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
