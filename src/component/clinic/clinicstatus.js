import React, { Component } from "react";
import {
  Chart,
  Tooltip,
  Axis,
  Legend,
  Pie,
  Coord,
  SmoothLine,
  Bar,
  StackBar
} from "viser-react";
import * as DataSet from "@antv/data-set";
import * as ax from "axios";

const apiurl = [
  "http://10.101.2.2:50500/api/clinic/EveryClinicTodayCounts",
  "https://5c3541f4ae60ba0014da42b3.mockapi.io/api/v1/dept",
  "http://10.101.2.2:50500/api/clinic/clinicvisitnowstatus"
];

class ClinicDailyWorkStatic extends Component {
  render() {
    return <div> Daily </div>;
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
    const _this = this;
    ax.get(apiurl[0])
      .then(res => {
        _this.setState({
          ClinicTodayPieData: res.data,
          ClinicTodayPieDataisLoad: true
        });
      })
      .catch(error => {
        console.log(error);
        _this.setState({
          ClinicTodayPieDataisLoad: false,
          error: error
        });
      });
  }

  render() {
    if (!this.state.ClinicTodayPieDataisLoad) {
      return <div> Loading </div>;
    } else {
      let PieData = [];
      const ds = new DataSet();
      const dv = ds.createView().source(this.state.ClinicTodayPieData);
      // console.log("in render:", this.state.ClinicTodayPieData);
      dv.transform({
        type: "pick",
        fields: ["VISIT_DEPT", "PAT_AMOUNT"]
      })
        .transform({
          type: "sort-by",
          fields: "PAT_AMOUNT",
          order: "DESC"
        })
        .transform({
          type: "percent",
          field: "PAT_AMOUNT",
          dimension: "VISIT_DEPT",
          as: "percent"
        });
      PieData = dv.rows;
      // console.log(PieData);

      return (
        <div>
          <Chart forceFit height={200} data={PieData}>
            <Tooltip showTitle={false} type="mini" />
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
      );
    }
  }
}

class ClinicVisitNowStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ClinicVisitData: []
    };
  }
  componentDidMount() {
    const _this = this;
    ax.get(apiurl[2]).then(res => {
      // console.log(res.data);
      _this.setState({
        ClinicVisitData: res.data
      });
    });
  }
  render() {
    if (!this.state.ClinicVisitData) {
      return <div>Loading</div>;
    } else {
      let IntervalData = [];
      const ds = new DataSet();
      const dv = ds.createView().source(this.state.ClinicVisitData);
      console.log(this.state.ClinicVisitData);

      dv.transform({
        type: 'map',
        callback(row) {
          row.PERCENT = row.UN_VISIT/row.TOTAL;
          return row;
        }
      })

      const scale = [{
        dataKey: 'percent',
        min: 0,
        formatter: '.2%',
      }];
      const data = dv.rows;
      console.log(dv);

      return (
        <div>
          <Chart forceFit height={400} data={data} scale={scale}>
            <Tooltip />
            <Axis />
            <Bar position="CLINIC_DEPT_NAME*TOTAL" />
            <SmoothLine position="CLINIC_DEPT_NAME*UN_VISIT" color="#ffbc20" />
          </Chart>
        </div>
      );
    }
  }
}

export { ClinicDailyWorkStatic, ClinicTodayWorkStatic, ClinicVisitNowStatus };
