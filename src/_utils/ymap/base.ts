
/**
 图：四种，正方形，圆形，椭圆形，三角形
 线：两种，option区分


 图层数n, 线层数 n*2 -1
 横纵都一样


        正方——              正方形 
          |   |       or      |——————|
        圆形  圆形           圆形   圆形


线的寻径算法。
暂定为贪心策略优化的DFS。

推断：

parent have child1, child2

图层1： parent
图层2： child1, child2

图层1 线层1： parent
线层2：         线
图层2 线层3： child1, child2
线层4
图层3

几个可能的逻辑

Node 上下连结点 连接的线是邻近层的。

Node 左右连结点是跨层的。


layer计算算法：
以最深层来算

A has child of B & D
B has child of C
C has child of D

那么
1: A
2: B
3: C
4: D

A从左或右连结点出发，到达D的左或右连结点
A从下连结点出发，到达B的上连结点
B从下连结点出发，到达C的上连结点
C从下连结点出发，到达D的上连结点
 */

import { drawMap } from "./draw";
import { ILine } from "./line";

export const MAX_ROW = 300;
export const MAX_COL = 300;
export const MAX_WIDTH = 200;
export const MAX_HEIGHT = 200;
export const NODE_DIFF = 30;

export interface INodeOption { 
  type: string;
  name: string;
}

export interface INode {
  type: string;
  childs: INode[];
  layer: number;
  name: string;
  layout?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  },
  middle?: {
    x: number;
    y: number;
  },
  lines: ILine[];
}

export interface IMap {
  items: IMapItem[];
  row?: number;
}

export interface IMapItem {
  nodeArray: INode[];
}
