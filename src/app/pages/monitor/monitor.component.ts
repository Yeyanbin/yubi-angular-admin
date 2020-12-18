import { Component, OnInit } from '@angular/core';
import { getUserModule } from '@store/user';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {

  userModule: any;
  constructor() { }

  ngOnInit(): void {
    this.userModule = getUserModule();
  }

}
