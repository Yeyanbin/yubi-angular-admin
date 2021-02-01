import {  IMap, IMapItem, INode, MAX_COL, MAX_HEIGHT, MAX_ROW, MAX_WIDTH, NODE_DIFF } from "./base";
import { getLines } from "./line";


// MAX_ROW = deep * (NODE_ROW + NODE_DIFF) - NODE_DIFF
// 100 = n * ( r + 10 ) - 10 
// r = (100 + 10) / n - 10 
export const drawMap = (items: IMapItem[]) => {
  const deep = items.length;
  const row = Math.floor(((MAX_ROW + NODE_DIFF)/ deep) - NODE_DIFF);

  items.forEach((item, index) => {
    const col = Math.floor((MAX_COL + NODE_DIFF) / item.nodeArray.length - NODE_DIFF); 
    item.nodeArray.forEach((node, node_index) => {
      node.layout = {
        top: (row + NODE_DIFF) * index + 1,
        bottom: (row + NODE_DIFF) * index + row,
        left: (col + NODE_DIFF) * node_index + 1,
        right: (col + NODE_DIFF) * node_index + col,
      }

      node.middle = {
        x: Math.floor((node.layout.left + node.layout.right)/2),
        y: Math.floor((node.layout.top + node.layout.bottom)/2),
      }

      if ( node.layout.right - node.layout.left > MAX_WIDTH ) {
        node.layout.right = node.middle.x + MAX_WIDTH / 2;
        node.layout.left = node.middle.x - MAX_WIDTH / 2;
      }

      if ( node.layout.bottom - node.layout.top > MAX_HEIGHT ) {
        node.layout.bottom = node.middle.y + MAX_HEIGHT / 2;
        node.layout.top = node.middle.y - MAX_HEIGHT / 2;
      }
    })
  });

  /**
   * 解决冲突情况要先完成线段重叠优化。把node的旗下线段合并
   */
  const lineConflict: {
    start: number;
    end: number;
  }[][] = []; // lineConflict[layer] = [{start-1, end+1}]

  // 绘制线段
  items.forEach(item => 
    item.nodeArray.forEach(node => 
      (node.lines = []) &&
      node.childs.forEach(child => {
        node.lines.push(...getLines(node.middle!.x, node.layout!.bottom, child.middle!.x, child.layout!.top, lineConflict, node.layer));
      })))
    
    return {
    items
  };
};


export const toMap = (parent: INode): IMap => {

  const items: IMapItem[] = [{ nodeArray: [parent] }];
  dfs_node_toMap(parent.childs, items);
  return drawMap(items);
}

const dfs_node_toMap = (childs: INode[], ymapItems: IMapItem[]) => {
  childs.forEach(item => {
    ymapItems[item.layer]? 
      ymapItems[item.layer].nodeArray.push(item) : 
      ymapItems[item.layer] = { nodeArray: [item] };
    dfs_node_toMap(item.childs, ymapItems);
  });
}

