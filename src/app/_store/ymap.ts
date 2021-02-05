import { Injectable } from '@angular/core';
import { IMap, INode, INodeOption } from '@utils/ymap/base';
import { toMap } from '@utils/ymap/draw';
import { Action, YubiModule } from './base';

// tslint:disable:no-conditional-assignment

interface IYmapState {
  /**
   * parent Node.
   */
  mapNode: INode; 
  ymap: IMap;
}

@Injectable({
  providedIn: 'root'
})
@YubiModule({
  name: 'ymap test'
})
export class YmapModule {

  constructor() {
    this.state.ymap = toMap(this.state.mapNode);
  }

  state: IYmapState = {
    mapNode: {
      type: 'square',
      childs: [
        {
          type: 'square',
          childs: [],
          layer: 1,
          name: 'Root_child_1',
          lines: [],
        },
        {
          type: 'square',
          childs: [],
          layer: 1,
          name: 'Root_child_2',
          lines: [],
        },
      ],
      layer: 0,
      name: 'Root',
      lines: [],
    },
    ymap: {
      items: []
    }
  };

  @Action({ log: 'add node' })
  addNode(layer: number, index: number, nodeOption: INodeOption): void {
    const parentNode = this.getNode(layer, index);
    parentNode.childs.push({
      type: 'test',
      name: parentNode.name + '_child_' + (parentNode.childs.length + 1),
      childs: [],
      layer: parentNode.layer + 1,
      lines: [],
    });

    this.update();
  }

  @Action() 
  update() {
    this.ymap = toMap(this.state.mapNode);
  }

  private getNode(layer: number, index: number): INode {
    return this.state.ymap.items[layer].nodeArray[index];
  }
  
  public get ymap(): IMap {
    return this.state.ymap;
  }

  public set ymap(newValue: IMap) {
    this.state.ymap = newValue;
  }
}
