import React, {Component} from 'react';
import { Button } from 'antd';
import * as av from '@antv/g2';

const data = [
  { genre: 'Sports', sold: 274 },
  { genre: 'Strategy', sold: 115},
];

const Chart = av.Chart;

class XxkWorkStatic extends Component {
  render(){
    return (
      <div>
        xxkworks Charts
        <Chart />
      </div>
    )
  }
}
export default XxkWorkStatic;
