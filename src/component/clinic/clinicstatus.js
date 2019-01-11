import React, { Component } from "react";
import {
  Chart,
  Tooltip,
  Axis,
  Legend,
  Pie,
  Coord,
  SmoothLine
} from 'viser-react';
import * as DataSet from "@antv/data-set";
import * as request from "request";
import * as ax from 'axios';


const apiurl = [
  "http://10.101.2.2:50500/api/clinic/EveryClinicTodayCounts",
  "https://5c3541f4ae60ba0014da42b3.mockapi.io/api/v1/dept"
];


class ClinicDailyWorkStatic extends Component {
  render() {
    return (
      <div>Daily</div>
    );
  }
}

class ClinicTodayWorkStatic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ClinicTodayPieData: [],
      ClinicTodayPieDataisLoad: false
    };
  }
  
  componentDidMount() {
    const _this=this;
    ax.get(apiurl[0])
      .then((res)=>{
        _this.setState({
          ClinicTodayPieData: res.data,
          ClinicTodayPieDataisLoad: true
        })
      })
      .catch((error)=>{
        console.log(error);
        _this.setState({
          ClinicTodayPieDataisLoad: false,
          error: error
        })
      })
  }

  render() {
    if(!this.state.ClinicTodayPieDataisLoad){
      return <div>Loading</div>
    }else{
      let PieData=[];
      const ds = new DataSet();
      const dv = ds.createView().source(this.state.ClinicTodayPieData);
      console.log("in render:" , this.state.ClinicTodayPieData);
      dv.transform({
        type:'pick',
        fields: ['VISIT_DEPT','PAT_AMOUNT']
      })
      .transform({
        type: 'sort-by',
        fields: 'PAT_AMOUNT',
        order: 'DESC'
      })
      .transform({
        type:'percent',
        field: 'PAT_AMOUNT',
        dimension: 'VISIT_DEPT',
        as: 'percent'
      });
      PieData = dv.rows;
      console.log(PieData);

    return (
      <div>
        <Chart forceFit height={200} data={PieData}>
          <Tooltip 
            showTitle={false}
            type="mini"
          />
          <Axis />
          <Legend dataKey="PAT_AMOUNT" />
          <Coord type="theta" />
          <Pie
            position="percent"
            color="PAT_AMOUNT"
            // label={[
            //   "persent",
            //   {
            //     offset: -20,
            //     textStyle: {
            //       rotate: 0,
            //       textAlign: "center",
            //       shadowBlur: 2,
            //       shadowColor: "rgba(0,0,0,.45)"
            //     }
            //   }
            // ]}
          />
        </Chart>
      </div>
    );}
  }
}

export { ClinicDailyWorkStatic, ClinicTodayWorkStatic };
