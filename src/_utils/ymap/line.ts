
/**
 * 从点1中心到点2中心
 * 
 * (node_1.middle.x, node_1.middle.y) 到 (node_2.middle.x, node_2.middle.y);
 * 下面称，从 (x1, y1) 到 (x2, y2)
 * 
 * 分两种线，
 *  1. 从邻近点到邻近点的线；
 *  2. 到不相邻点的线。（这里可以绕过右边）// 暂不考虑
 */

import { min } from "rxjs/operators";

// import { NODE_DIFF } from "./base";
/**
 * 邻近点的通道 
 * 取 y = (y1 + y2)/2 取整
 * 
 * 三个线段
 * 
 * (x1, y1) 到 (x1, y)
 * (x1, y) 到 (x2, y)
 * (x2, y) 到 (x2, y2)
 * 
 * 暂不考虑重叠优化，如果要优化的话，在父节点绘制完成后增加重叠检测。
 * 
 * 单个线段
 * 
 *  (x1, y1)
 */

const LINE_OFFSET = 5;

export interface ILine {
  x_1: number;
  y_1: number;
  x_2: number;
  y_2: number;
}

export const getLines = (x1: number, y1: number, x2: number, y2: number, y: number, y_line: { start: number, end: number }): ILine[] => {
  
  y_line.start > Math.min(x1, x2) && (y_line.start = Math.min(x1, x2));
  y_line.end < Math.max(x1, x2) && (y_line.end = Math.max(x1, x2));

  return [
    // { x_1: x1, y_1: y1, x_2: x1, y_2: y },
    { x_1: x2, y_1: y, x_2: x2, y_2: y2 },
  ]
}