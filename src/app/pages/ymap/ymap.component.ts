import { Component, OnInit } from '@angular/core';
import { YmapModule } from '@store/ymap';
import { MAX_COL, MAX_ROW } from '@utils/ymap/base';

@Component({
  selector: 'app-ymap',
  templateUrl: './ymap.component.html',
  styleUrls: ['./ymap.component.scss']
})
export class YmapComponent implements OnInit {

  constructor(public ymapModule: YmapModule) { }

  ngOnInit(): void {
    console.log(this.ymapModule.state);
  }
  
  add(layer: number, index: number) {
    console.log('Add layer: '+ layer + ', index:' + index);
    this.ymapModule.addNode(layer, index, {
      type: 'test',
      name: 'add Test'
    })
  }

  clear() {
    this.ymapModule.state.mapNode = {
      type: 'square',
      childs: [],
      layer: 0,
      name: 'Root',
      lines: [],
    };
    this.ymapModule.update();
  }

  get layout() {
    return {
      maxRow: MAX_ROW,
      maxCol: MAX_COL,
    }
  }
}
