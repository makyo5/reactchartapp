import React, {Component} from 'react';
import { Button } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { Chart, Tooltip, Axis, Legend, Line, SmoothLine, Point } from 'viser-react';


const DataSet =require('@antv/data-set');

const testdata = [
  { genre: 'Sports', sold: 274 },
  { genre: 'Strategy', sold: 115},
];
const clinicdata = [
  { name: '急诊外科', value: 141 },
  { name: '急诊内科', value: 234 },
  { name: '急诊儿科', value: 487 }
];
const emclinicdaydata = [
  { date: '2018-08','急诊儿科': '674', '急诊外科': '145', '急诊内科': '574' },
  { date: '2018-09','急诊儿科': '544', '急诊外科': '245', '急诊内科': '264' },
  { date: '2018-10','急诊儿科': '429', '急诊外科': '348', '急诊内科': '210' },
  { date: '2018-11','急诊儿科': '586', '急诊外科': '394', '急诊内科': '329' },
];

// const dv=new DataSet.View().source(emclinicdaydata);
const ds = new DataSet();
const dv = ds.createView().source(emclinicdaydata);
dv.transform({
  type: 'fold',
  fields: ['急诊儿科','急诊外科','急诊内科'],
  key: 'cliniclabel',
  value: 'accounts'
}).transform({
  type: 'sort-by',
  fields: ['accounts']
});

const data = dv.rows;

const scale = [{
  dataKey: 'date',
  min: 1,
  max: 800,
}];


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
          style={{height:'200px'}}
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
          style={{height:'200px'}}
          />
      </div>
    )
  }
}

class ECWorkDayStatics extends Component {
  
  render(){
    return (
      <div>
        <Chart forceFit height={200} data={data}>
          <Tooltip />
          <Axis />
          <Legend />
          <SmoothLine position="date*accounts" color="cliniclabel" />
        </Chart>
      </div>
    )
  }
}


export {XxkWorkStatic, ECWorkStatics, ECWorkDayStatics};
