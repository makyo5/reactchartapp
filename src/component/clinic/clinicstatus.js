import React, { Component } from "react";
import {
  Chart,
  Tooltip,
  Axis,
  Legend,
  Pie,
  Coord,
  SmoothLine
} from "viser-react";
import * as DataSet from "@antv/data-set";
import * as request from "request";
import * as sa from 'superagent';



let data = "";

const apiurl = [
  "http://10.101.2.2:50500/api/clinic/EveryClinicTodayCounts"
]

function ClinicTodayCounts() {
  // request("http://10.101.2.2:50500/api/clinic/EveryClinicTodayCounts", function(
  //   error,
  //   response,
  //   body
  // ) {
  //   var dataobj = JSON.parse(body);
  //   ClinicTodayPieData= dataobj.map((el)=>{
  //     return {
  //       VISIT_DEPT: el.VISIT_DEPT,
  //       PAT_AMOUNT: el.PAT_AMOUNT
  //       };
  //   });
  //   console.log(ClinicTodayPieData);984878
  // });
  request.get(
    "http://10.101.2.2:50500/api/clinic/EveryClinicTodayCounts",
    function (error, response, body) {
      // ClinicTodayPieData = body;
      this.setState({ ClinicTodayPieData: body });
    }
  );
}


class ClinicDailyWorkStatic extends Component {
  render() {
    return <div>Daily</div>;
  }
}

class ClinicTodayWorkStatic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ClinicTodayPieData : "2"
    }
  }

  getTheData(){
    this.setState({
      ClinicTodayPieData: 'body',
    });
    // request.get(
    //   apiurl[0],
    //   function (error, response, body) {
        
    //   }
    // );
  }

  componentWillMount() {
    this.getTheData();
    
    console.log('ehl');
    console.log(this.state.ClinicTodayPieData);

    // console.log(this.ClinicTodayPieData);
    // const ds = new DataSet();
    // const dv = ds.createView().source(ClinicTodayPieData);
    // dv.transform({
    //   type:'percent',
    //   field: 'VISIT_DEPT',
    //   dimension: 'PAT_AMOUNT',
    //   as: 'percent'
    // });
    // data = dv.rows;
  }

  render() {
    return (
      <div>
        
      <Chart forceFit height={400} data={data}>
        <Tooltip showTitle={false} />
        <Axis />
        <Legend dataKey="PAT_AMOUNT" />
        <Coord type="theta" />
        <Pie
          position="percent"
          color="PAT_AMOUNT"
          label={[
            "persent",
            {
              offset: -20,
              textStyle: {
                rotate: 0,
                textAlign: "center",
                shadowBlur: 2,
                shadowColor: "rgba(0,0,0,.45)"
              }
            }
          ]}
        />
        </Chart>
        </div>
    );
  }
}

export { ClinicDailyWorkStatic, ClinicTodayWorkStatic };
