import React, {Component} from 'react';
import { Button } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { Chart, Tooltip, Axis, Legend, Line, Point } from 'viser-react';


const DataSet =require('@antv/data-set');

const testdata = [
  { genre: 'Sports', sold: 274 },
  { genre: 'Strategy', sold: 115},
];
const clinicdata = [
  { name: '急诊外科', value: 141 },
  { name: '急诊内科', value: 234 },
  { name: '急诊儿科', value: 487 }
]
const emclinicdaydata = [
  { name: '急诊儿科', date: '2018-09', value: '544' },
  { name: '急诊儿科', date: '2018-10', value: '429' },
  { name: '急诊儿科', date: '2018-11', value: '586' },
  { name: '急诊外科', date: '2018-09', value: '245' },
  { name: '急诊外科', date: '2018-10', value: '348' },
  { name: '急诊外科', date: '2018-11', value: '394' },
  { name: '急诊内科', date: '2018-09', value: '264' },
  { name: '急诊内科', date: '2018-10', value: '210' },
  { name: '急诊内科', date: '2018-11', value: '329' },
]


class XxkWorkStatic extends Component {
  getTestOption(){
    const solddata=[]
    const soldtype=[];
    testdata.forEach(element => {
      solddata.push(element.sold);
      soldtype.push(element.genre);
    });
    const option = {
      xAxis: {
        type: 'category',
        data: soldtype/*['Sports','Strategy']*/
      },
      yAxis: {
        type:'value'
      },
      series: [{
        data: solddata,
        type: 'bar'
      }]
    }
    return option;
  };

  getECOption(){
    const accountsdata=[]
    const label=[];
    const okdata=[];
    clinicdata.forEach(element => {
      label.push(element.label);
      accountsdata.push(element.accounts);
    });

    const option = {      
      series: [{
        data: clinicdata,
        type: 'pie'
      }]
    }
    return option;
  };

  render(){
    return (
      <div>
        <ReactEcharts
          option={this.getTestOption()}
          height={300}
          />
      </div>
    )
  }
}

class ECWorkStatics extends Component {
  
  getECOption(){
    const accountsdata=[]
    const label=[];
    const okdata=[];
    emclinicdaydata.forEach(element => {
      label.push(element.label);
      accountsdata.push(element.accounts);
    });

    const option = {      
      series: [{
        data: clinicdata,
        type: 'pie'
      }]
    }
    return option;
  };

  render(){
    return (
      <div>
        <ReactEcharts
          option={this.getECOption()}
          height={300}
          />
      </div>
    )
  }
}

class ECWorkDayStatics extends Component {
  
  getECOption(){
    const namedata=[]
    const datedata=[];
    const valuedata=[];
    clinicdata.forEach(element => {
      namedata.push(element.name);
      datedata.push(element.date);
      valuedata.push(element.value);
    });

    const option = {
      legend: {
        data: namedata
      },
      xAxis: {
        type: 'category',
        data: datedata
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: valuedata,
          type: 'line'
        }]
    }
    return option;
  };

  render(){
    return (
      <div>
        <ReactEcharts
          option={this.getECOption()}
          height={300}
          />
      </div>
    )
  }
}


export {XxkWorkStatic, ECWorkStatics, ECWorkDayStatics};
