import { Component, OnInit } from '@angular/core';
import { YmapModule } from '@store/ymap';
import { MAX_COL, MAX_ROW } from '@utils/ymap/base';

import * as d3 from 'd3';
import { path } from 'd3';

@Component({
  selector: 'app-ymap',
  templateUrl: './ymap.component.html',
  styleUrls: ['./ymap.component.scss']
})
export class YmapComponent implements OnInit {

  constructor(public ymapModule: YmapModule) { }

  ngOnInit(): void {
    console.log(this.ymapModule.state);
    console.log(d3);

    var rectHeight = 25; //每个矩形所占的像素高度(包括空白)
    var data = [5,15,23,78,110,57,29,34,71];
    
    
    d3.select("#rect").selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x",20)
    .attr("y",function(d,i){
      return i * rectHeight;
    })
    .attr("width",function(d){
      return d;
    })
    .attr("height",rectHeight-2)
    .attr("fill","blue")
    .on('click', (...arg) => {
      // console.log(i);
      console.log(arg);
    });
;

    // var line_data: [number, number][] = [[0, 20], [50, 30], [100, 50], [200, 60], [300, 90]];
    // // var line_data: [number, number][] = [[0, 20], [1000, 200], [0, 0], [0, 0], [0, 0]];

    // var lineGeneratorA = d3.line();
    // var pathString = lineGeneratorA(line_data);

    // var line_data_2: [number, number][] = [[0, 20], [50, 20], [50, 0], [0, 0], [0, 0]];
    // d3.select('path').attr('d', pathString!);
    
    let lineA = d3.path();

    lineA.moveTo(100, 100);
    lineA.lineTo(100, 101);
    lineA.lineTo(150, 151);
    lineA.lineTo(150, 150);

    let lineB = d3.path();


    

    d3.select('#d3-container').selectAll('path')
      .data([lineA.toString()])
      .enter()
      .append('path')
      .attr('d', (d, i) => {
        return d;
      })

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

  log(v: any) {
    console.log(v);
  }

  get layout() {
    return {
      maxRow: MAX_ROW,
      maxCol: MAX_COL,
    }
  }
}
