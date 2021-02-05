import {  IMap, IMapItem, INode, MAX_COL, MAX_HEIGHT, MAX_ROW, MAX_WIDTH, NODE_DIFF } from "./base";
import { getLines } from "./line";

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

      // 处理Node过大情况
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
   * 
   * 线段重叠之后，合并仅仅需要记录上一条Y线段即可
   */
  let preY_line = {
    y: 0,
    start: 0,
    end: 0,
  }


  // 绘制线段
  items.forEach(item => 
    item.nodeArray.forEach(node => {

      if ( node.childs.length > 0) {
        node.lines = []
        let y = Math.floor((node.middle!.y + node.childs[0]?.middle!.y) /2);
        const y_line = {
          start: Number.MAX_VALUE,
          end: Number.MIN_VALUE,
        }
        node.childs.forEach(child =>   
          node.lines.push(...getLines(node.middle!.x, node.layout!.bottom, child.middle!.x, child.layout!.top, y, y_line))
        );

        // 利用perY来解决冲突。
        // 因为目前是从左到右，实际上只需要判断end，再加点偏移量
        if ( preY_line.y === y && ( 
          ( y_line.start >= preY_line.start && y_line.start <= preY_line.end ) ||
          ( y_line.end >= preY_line.start && y_line.end <= preY_line.end )
         )) {
          console.log(preY_line);
          console.log(y_line);
          // y的偏移量
          y += 4;
          node.lines.forEach(line => {
            line.y_1 < line.y_2 ? line.y_1 = y : line.y_2 = y
          })
        }

        node.lines.push({
          x_1: y_line.start,
          y_1: y,
          x_2: y_line.end,
          y_2: y,
        });

        node.lines.push({
          x_1: node.middle!.x,
          y_1: node.layout!.bottom,
          x_2: node.middle!.x,
          y_2: y,
        });

        preY_line = {
          y,
          start: y_line.start,
          end: y_line.end,
        };
      }

    }))

    
    return {
    items
  };
};
